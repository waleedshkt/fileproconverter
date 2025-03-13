import React, { memo } from "react";
import { Input } from "antd";
import CreditCardInput from "react-credit-card-input";
import * as styles from "./index.module.css";

const RegisterStep2 = ({ touched, errors, values, handleChange, handleBlur, handleError }) => {
  return (
      <>
        <div className={styles.textAndSupportingText}>
          <div className={styles.text}>Card Details</div>
          <div className={styles.supportingText}>
            Enter your debit ot credit card details
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.row}>
            <div className={styles.inputWithLabel}>
              <div className={styles.label}>Name on card</div>
              <Input
                className={styles.input}
                placeholder="Olivia Rhye"
                bordered={true}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div>
              <CreditCardInput 
                cardNumberInputProps={{ value: values.cardNumber, onchange: handleChange("cardNumber"), onblur: handleBlur("cardNumber"), onerror: handleError("cardNumber") }}
                cardExpiryInputProps={{ value: values.expiry, onchange: handleChange("expiry"), onblur: handleBlur("expiry"), onerror: handleError("expiry") }}
                cardCVCInputProps={{ value: values.cvc, onchange: handleChange("cvc"), onblur: handleBlur("cvc"), onerror: handleError("cvc") }}
                inputComponent={Input}
                inputClassName={styles.input}
              />
              {(!!errors.cardNumber && touched.cardNumber) && <span style={{ fontSize: "12px", color: "red" }}>{errors.cardNumber}</span>}
              {(!!errors.expiry && touched.expiry) && <span style={{ fontSize: "12px", color: "red" }}>{errors.expiry}</span>}
              {(!!errors.cvc && touched.cvc) && <span style={{ fontSize: "12px", color: "red" }}>{errors.cvc}</span>}
            </div>
          </div>
        </div>
      </>
  );
};

export default memo(RegisterStep2);
