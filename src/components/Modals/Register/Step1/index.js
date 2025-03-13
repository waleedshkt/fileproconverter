import * as React from "react";
import "antd/dist/antd.min.css";
import { Input, Button } from "antd";
import PropTypes from "prop-types";
import * as styles from "./index.module.css";

const ModalSubscribe2 = ({ className = "", onClose }) => {
  return (
    <div className={[styles.modalSubscribe1, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.step1Of}>Step 1 of 3</div>
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
              className={styles.input}
              placeholder="waleedshkt@gmail.com"
              bordered={true}
            />
          </div>
          <div className={styles.inputWithLabel}>
            <div className={styles.label}>Password</div>
            <Input className={styles.input} bordered={true} />
          </div>
        </div>
      </div>
      <div className={styles.modalActions}>
        <Button className={styles.buttonBase} type="default">
          Cancel
        </Button>
        <Button className={styles.buttonBase} type="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

ModalSubscribe2.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default ModalSubscribe2;
