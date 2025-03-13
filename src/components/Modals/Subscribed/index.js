import * as React from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import PropTypes from "prop-types";
import * as styles from "./modal-subscribe3.module.css";

const ModalSubscribe3 = ({ className = "", onClose }) => {
  return (
    <div className={[styles.modalSubscribe4, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.welcomePremiumSubscriber}>
          Welcome, Premium Subscriber!
        </div>
        <div className={styles.form}>
          <div className={styles.inputFieldBaseParent}>
            <div className={styles.inputFieldBase}>
              <div className={styles.inputWithLabel}>
                <div className={styles.label}>Subscription</div>
                <div className={styles.text}>Yearly</div>
              </div>
              <div className={styles.hintText}>
                This is a hint text to help user.
              </div>
            </div>
            <div className={styles.inputFieldBase}>
              <div className={styles.inputWithLabel}>
                <div className={styles.label}>Expires on</div>
                <div className={styles.text}>27 February 2026</div>
              </div>
              <div className={styles.hintText}>
                This is a hint text to help user.
              </div>
            </div>
          </div>
          <div className={styles.inputWithLabel2}>
            <div className={styles.label}>Last invoice</div>
            <div className={styles.frameParent}>
              <div className={styles.inputFieldBaseParent}>
                <div className={styles.text2}>{`26 February 2025 `}</div>
                <div className={styles.text3}>USD 12</div>
              </div>
              <div className={styles.text4}>Card ending with 2568</div>
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

ModalSubscribe3.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default ModalSubscribe3;
