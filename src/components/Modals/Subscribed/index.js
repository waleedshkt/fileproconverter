/* import React, { memo, useCallback, useContext } from "react";
import { useHookstate as useState } from "@hookstate/core";
import { Modal } from "antd";
import * as styles from "./index.module.css";

import { isAuth, misc, subscription } from "../../../globalStates";
import { AuthContext } from "../../../helpers/auth/firebase/user";

import { getFormattedDate, getFutureFormattedDate } from "../../../helpers/date";

const SubscribedModal = ({ open, onClose }) => {
  const { signOut } = useContext(AuthContext);

  const isAuth_ = useState(isAuth); //global
  const misc_ = useState(misc); //global
  const { lastInvoiceDate, cardEnding } = useState(subscription); //global

  const handleSignOut = useCallback(async () => {
    try {
      misc_.isLoading.set(true);
      
      await signOut();

      isAuth_.set(false);
      misc_.isLoading?.set(false);
    }catch(e) {
      console.error(e);

      misc_.set({
        isLoading: false,
        message: { type: "error", content: "Something went wrong. Please try again" }
      });
    }
  }, [signOut]);

  return (
    <Modal 
      open={open}
      okText="Close"
      cancelText="Logout"
      onCancel={handleSignOut}
      onOk={onClose}
      className={styles.modalSubscribe4}
    >
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
            </div>
            <div className={styles.inputFieldBase}>
              <div className={styles.inputWithLabel}>
                <div className={styles.label}>Expires on</div>
                <div className={styles.text}>{getFutureFormattedDate(lastInvoiceDate?.get(), 1, "year", "DD MMM YYYY")}</div>
              </div>
            </div>
          </div>
          <div className={styles.inputWithLabel2}>
            <div className={styles.label}>Last invoice</div>
            <div className={styles.frameParent}>
              <div className={styles.inputFieldBaseParent}>
                <div className={styles.text2}>{getFormattedDate(lastInvoiceDate?.get(), "DD MMM YYYY")}</div>
                <div className={styles.text3}>USD 12.00</div>
              </div>
              <div className={styles.text4}>Card ending with {cardEnding?.get()}</div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSubscribe3;
 */