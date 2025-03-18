/* import React, { memo, useContext } from "react";
import { useHookstate as useState } from "@hookstate/core";
import { useFormik } from "formik";
import { object as yupObject, string as yupString } from "yup"; 
import { Input, Modal } from "antd";
import * as styles from "./index.module.css";

import { AuthContext } from "../../../helpers/auth/firebase/user";
import { isAuth, misc } from "../../../globalStates";

const LoginModal = ({ open, onClose }) => {

  const { signInWithEmail } = useContext(AuthContext);
    
  const isAuth_ = useState(isAuth); //global
  const misc_ = useState(misc); //global

  const validationSchema = yupObject({
    email: yupString("")
        .trim()
        .email("Invalid Email")
        .required("Email is required"),
    password: yupString("")
        .min(8, "Must contain min 8 characters")
        .required("Enter your password"),
  });

  const handleSubmitForm = useCallback(async (values) => {
    try {

        misc_.isLoading.set(true);
        const res = await signInWithEmail(values.email, values.password);
          
        if(!res) {
            throw res;
        }else { //authenticated
            
            const { photoURL } = res;
    
            // fetch params from photo url
            let params = new URL(photoURL).searchParams() || {};
            if(Object.keys(params)) { // subscribed
                // set params

                isAuth_.set(true);
            }else {
              await signOut();
            }

            misc_.isLoading.set(false);
            onClose();

        }

    }catch(er) {

      let error = "";

      if(er?.code === "auth/invalid-credential") {
        error = "Invalid username or password.";
      }

      console.error(er?.message || er);
      
      misc_.set({
        isLoading: false,
        message: { type: "error", content: error || "Failed to authenticate. Please try again" }
      });

      onClose();
    }
  }, []);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
      initialValues: { email: "", password: "" },
      validationSchema,
      onSubmit: handleSubmitForm
  });

  return (
    <Modal 
        open={open} 
        okText="Login"
        cancelText="Close"
        onOk={handleSubmit}
        onCancel={onClose}
        className={styles.modalSubscribe1}
    >
      <div className={styles.content}>
        <div className={styles.textAndSupportingText}>
          <div className={styles.text}>Login</div>
        </div>
        <div className={styles.form}>
          <div className={styles.inputWithLabel}>
            <div className={styles.label}>Email</div>
            <Input
              name="email"
              type="email"
              placeholder="Enter here"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={styles.input}
            />
            {(!!errors.email && touched.email) && <span style={{ fontSize: "12px", color: "red" }}>{errors.email}</span>}
          </div>
          <div className={styles.inputWithLabel}>
            <div className={styles.label}>Password</div>
            <Input.Password 
                name="password"
                placeholder="Enter here"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={styles.input} 
            />
            {(!!errors.password && touched.password) && <span style={{ fontSize: "12px", color: "red" }}>{errors.password}</span>}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default memo(LoginModal);
 */