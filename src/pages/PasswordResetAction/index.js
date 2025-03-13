import React, { memo, useContext, useCallback, useEffect } from "react";
import { useHookstate as useState } from "@hookstate/core";
import { useFormik } from "formik";
import { string as yupString, object as yupObject, ref as yupRef } from "yup";
import { Navigate, useSearchParams } from "react-router-dom";
import { Input, message } from "antd";
import { Loader } from "../../components/Loader";
import styles from "./index.module.css";

import { AuthContext } from "../../helpers/auth/firebase/user";

const AuthActionPage = () => {
    const [ searchParams ] = useSearchParams();
    const { confirmPasswordReset, verifyPasswordResetCode } = useContext(AuthContext);

    const isCodeVerified = useState(null);
    const isReset = useState(false);

    const mode = searchParams.get("mode");
    const actionCode = searchParams.get("oobCode");

    const [ messageApi, contextHolder ] = message.useMessage();

    const validationSchema = yupObject({
        password: yupString("")
            .min(8, "Must contain min 8 characters")
            .required("Enter your password"),
        confirmPassword: yupString("")
            .required("Confirm your password")
            .oneOf([yupRef("password")], "Password does not match")    
    });

    const handleSubmitNewPassword = useCallback(async (values, { setSubmitting }) => {
        try {
            setSubmitting(true);
            await confirmPasswordReset(actionCode, values.password);
            setSubmitting(false);
            isReset.set(true);
        }catch(er) {
            setSubmitting(false);
            console.error(er);
            messageApi.open({ type: "error", content: "Resetting failed. Please try again", duration: 5 });
        }
    }, [confirmPasswordReset]);

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
    } = useFormik({
        validateOnChange: false,
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validationSchema,
        onSubmit: handleSubmitNewPassword
    });

    useEffect(() => {
        verifyPasswordResetCode(actionCode)
            .then(email => isCodeVerified.set(true))
            .catch(er => isCodeVerified(false));
    }, []);

    if(!mode || !actionCode) {
        window.alert(mode, actionCode);
        return <Navigate to="/" replace />;
    }

    if(mode === "resetPassword") { 
        if(typeof isCodeVerified.get() === "boolean") {
            return (
                <div className={styles.appealerAppealFilerAuthPa}>
                    {contextHolder}
                    <main className={styles.main}>
                        {isCodeVerified.get() ? (isReset.get() ? (<div className={styles.formSection}>Reset password successfully.</div>) : (
                            <div className={styles.formSection}>
                                <div className={styles.formHeading}>
                                <div className={styles.subheading}>
                                    Enter your new password
                                </div>
                                </div>
                                <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.inputField}>
                                    <div className={styles.inputWithLabel}>
                                        <div className={styles.label}>New password</div>
                                            <Input.Password
                                                className={styles.input}
                                                name="password"
                                                placeholder="Enter here"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                    <div className={styles.hintText}>
                                        {(!!errors.password && touched.password) && errors.password}
                                    </div>
                                </div>
                                <div className={styles.inputField}>
                                    <div className={styles.inputWithLabel}>
                                        <div className={styles.label}>Confirm new password</div>
                                            <Input.Password
                                                className={styles.input}
                                                name="confirmPassword"
                                                placeholder="Enter here"
                                                value={values.confirmPassword}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                    <div className={styles.hintText}>
                                        {(!!errors.confirmPassword && touched.confirmPassword) && errors.confirmPassword}
                                    </div>
                                </div>
                                <button className={styles.sendButton} type="submit">
                                    <div className={styles.text4}>Update</div>
                                </button>
                                </form>
                            </div>
                        )) : <div className={styles.formSection}>Something went wrong. Please try resetting password again.</div>}
                    </main>
                    {isSubmitting && <Loader />}
                </div>
            );
        }else {
            return <Loader />;
        }  
    }else { 
        return <div style={{ width: "100%", textAlign: "center", top: "80px" }}>Something went wrong!</div>;
    }        
};

export default memo(AuthActionPage);