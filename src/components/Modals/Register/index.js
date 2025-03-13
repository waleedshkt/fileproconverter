import React, { memo, useCallback, useContext } from "react";
import { useHookstate as useState } from "@hookstate/core";
import { useFormik } from "formik";
import { object as yupObject, string as yupString } from "yup";
import { Modal } from "antd";

import { isAuth, subscription, misc } from "../../../globalStates";
import { AuthContext } from "../../../helpers/auth/firebase/user";
import { processPayment } from "../../../helpers/aws/lambda";

import lazyLoad from "../../../helpers/lazyLoad";
import Step1 from "./Step1";
const Step2 = lazyLoad("Modals/Register/Step2");
const Step3 = lazyLoad("Modals/Register/Step3");
const SubscribedModal = lazyLoad("Modals/Subscribed");

const RegisterModal = ({ open, onClose }) => {
    const { registerWithEmail } = useContext(AuthContext);

    const isAuth_ = useState(isAuth); //global
    const misc_ = useState(misc); //global
    const { subscribed } = useState(subscription); //global
    const currentStep = useState(JSON.parse(JSON.stringify(isAuth_?.get())) && JSON.parse(JSON.stringify(subscribed?.get())) ? 2 : 1);

    const authValidationSchema = yupObject({
        email: yupString("")
            .trim()
            .email("Invalid Email")
            .required("Email is required"),
        password: yupString("")
            .min(6, "Must contain min 6 characters")
            .required("Enter your password"),
    });

    const paymentValidationSchema = yupObject({
        cardNumber: yupString("")
            .required("Enter card number"),
        expiry: yupString("")
            .required("Enter expiry date"),
        cvc: yupString("")
            .required("Enter CVC number"),
        streetAddress: yupString("")
            .trim()
            .required("Enter address"),
        country: yupString("")
            .required("Select country"),
        city: yupString("")
            .required("Enter city")
        
    });

    const handleSubmitRegisterForm = useCallback(async (values) => {
        try {

            misc_.isLoading.set(true);
            const res = await registerWithEmail(values.email, values.password);
              
            if(!res) {
                throw res;
            }else { //authenticated
    
                misc_.isLoading.set(false);
                isAuth_.set(true);
                currentStep?.set(2);
            }
    
        }catch(er) {
    
          let error = "";
    
          if(er?.code === "auth/invalid-credential") {
            error = "Invalid username or password.";
          }else if(er?.code === 'auth/email-already-in-use') {
            error = "You are already registered. Please log in";
          }
    
          console.error(er?.message || er);
          
          misc_.set({
            isLoading: false,
            message: { type: "error", content: error || "Failed to authenticate. Please try again" }
          });
        }
    }, []);

    const handleSubmitPayForm = useCallback((values) => {
        try {

            if(!!TCO) {
                misc_.isLoading?.set(true);

                TCO?.loadPubKey();

                const tokenRequest = () => {
                    // get the user token
                    let [month, year] = values.expiry.split("/");
                    const args = {
                        sellerId: process.env.GATSBY_2CHECKOUT_ACCOUNT_NUMBER,
                        publishableKey: process.env.GATBY_2CHECKOUT_PUBLISHABLE_API_KEY,
                        ccNo: values.cardNumber,
                        cvv: values.cvc,
                        expMonth: month,
                        expYear: year
                    };

                    TCO?.requestToken(
                        async (data) => { //success callback

                            // submit to the lambda for processing
                            const res = await processPayment({ ...values, token: data.response.token.token });

                        }, 
                        (data) => { //error callback
                            if(data.errorCode === 200) {
                                tokenRequest(); // re-attempt
                            }else {
                                throw data.errorMsg;
                            }
                        }, 
                        args
                    );
                }

                tokenRequest();
            }else {
                throw Error("Failed to initialize payment process. Please check your network and try again");
            }

        }catch(e) {
            console.error(e);
            misc_.set({
                isLoading: false,
                message: { type: "error", content: "Failed to process payment. Please try again" }
            });
        }
    }, []);

    const {
        values: authValues,
        errors: authErrors,
        touched: authTouched,
        handleChange: handleAuthChange,
        handleBlur: handleAuthBlur,
        handleSubmit: handleSubmitRegister
    } = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema: authValidationSchema,
        onSubmit: handleSubmitRegisterForm
    });

    const {
        values: paymentValues,
        errors: paymentErrors,
        touched: paymentTouched,
        handleChange: handlePaymentChange,
        handleBlur: handlePaymentBlur, 
        setFieldError: setPaymentFieldError,
        setFieldValue: setPaymentFieldValue,
        handleSubmit: handleSubmitPay
    } = useFormik({
        initialValues: { cardNumber: "", expiry: "", cvc: "", streetAddress: "", country: "", city: "" },
        validationSchema: paymentValidationSchema,
        onSubmit: handleSubmitPayForm
    });

    const handlePaymentError = useCallback(prop => error => setPaymentFieldError(prop, error), [setPaymentFieldError]);

    const handleCurrentStep = useCallback(i => () => currentStep?.set(p => p + i));

    const renderSection = useCallback(() => {
        let cstp = currentStep?.get();

        if(cstp === 1) {
            return (
                <Step1 
                    touched={authTouched}
                    values={authValues}
                    errors={authErrors}
                    handleBlur={handleAuthBlur}
                    handleChange={handleAuthChange}
                />
            );
        }else if(cstp === 2) {
            return (
                <Step2 
                    touched={paymentTouched}
                    values={paymentValues}
                    errors={paymentErrors}
                    handleBlur={handlePaymentBlur}
                    handleChange={handlePaymentChange}
                    handleError={handlePaymentError}
                />
            );
        }else {
            return (
                <Step3 
                    touched={paymentTouched}
                    values={paymentValues}
                    errors={paymentErrors}
                    handleBlur={handlePaymentBlur}
                    handleChange={handlePaymentChange}
                    setFieldValue={setPaymentFieldValue}
                />
            );
        }
    }, [
        currentStep?.get(),
        authErrors,
        authValues,
        authTouched,
        paymentErrors,
        paymentTouched,
        paymentValues,
        handleAuthBlur,
        handleAuthChange,
        handlePaymentBlur,
        handlePaymentChange,
        handlePaymentError,
        setPaymentFieldValue
    ]);

    if(subscribed?.get()) {
        return <SubscribedModal />;
    }else {
        return (
            <Modal
                open={open}
                cancelText={currentStep?.get() < 3 ? "Cancel" : "Back"}
                okText={currentStep?.get() < 3 ? "Next" : "Pay"}
                onCancel={currentStep?.get() < 3 ? onClose : handleCurrentStep(-1)}
                onOk={currentStep?.get() === 1 ? handleSubmitRegister : (currentStep?.get() === 2 ? handleCurrentStep(1) : handleSubmitPay)} 
                className={styles.modalSubscribe1}
            >
                <div className={styles.content}>
                    <div className={styles.step1Of}>Step {currentStep?.get()} of 3</div>
                    {renderSection()}
                </div>
            </Modal>
        );
    }
};

export default memo(RegisterModal);