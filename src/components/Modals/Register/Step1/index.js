import React, { memo } from "react";
import { Input,  } from "antd";
import * as styles from "./index.module.css";

const RegisterStep1 = ({ touched, errors, values, handleChange, handleBlur }) => {
  
  return (
    <>
      <div className={styles.textAndSupportingText}>
        <div className={styles.text}>Register</div>
        <div className={styles.supportingText}>
          Enter your auth credentials to continue
        </div>
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
    </>
  );
};

export default memo(RegisterStep1);
