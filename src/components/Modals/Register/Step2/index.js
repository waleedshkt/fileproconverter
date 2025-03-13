import * as React from "react";
import "antd/dist/antd.min.css";
import { Input, Button } from "antd";
import PropTypes from "prop-types";
import * as styles from "./modal-subscribe.module.css";

const ModalSubscribe = ({ className = "", onClose }) => {
  return (
    <div className={[styles.modalSubscribe2, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.step2Of}>Step 2 of 3</div>
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
            <div className={styles.inputWithLabel1}>
              <div className={styles.label}>Expiry</div>
              <Input
                className={styles.input1}
                placeholder="06 / 2024"
                bordered={true}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputWithLabel}>
              <div className={styles.label}>Card number</div>
              <Input
                className={styles.input}
                placeholder="1234 1234 1234 1234"
                bordered={true}
              />
            </div>
            <div className={styles.inputWithLabel1}>
              <div className={styles.label}>CVV</div>
              <Input className={styles.input} bordered={true} />
            </div>
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

ModalSubscribe.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default ModalSubscribe;
