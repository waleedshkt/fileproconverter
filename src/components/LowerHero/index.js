import React, { memo, useCallback } from "react";
import { useHookstate as useState } from "@hookstate/core";
import { Button } from "antd";
import * as styles from "./index.module.css";

/* import lazyLoad from "../../helpers/lazyLoad";
const LoginModal = lazyLoad("Modals/Login");
const RegisterModal = lazyLoad("Modals/Register");
 */
const LowerHero = ({ }) => {
    /* const openLoginModal = useState(false);
    const openRegisterModal = useState(false);
  
    const toggleRegisterModal = useCallback(open => () => openRegisterModal?.set(open), []);
  
    const toggleLoginModal = useCallback(open => () => openLoginModal?.set(open), []);
 */
  return (
    <>
      <div className={[styles.lowerHero, className].join(" ")}>
        <div className={styles.headingAndSupportingText}>
          <div className={styles.heading}>Unlimited file conversions. No ads.</div>
          <div className={styles.supportingText}>
            Convert as much files as you like in different formats for only $12
            per year subscription.
          </div>
        </div>
        {/* <div className={styles.actions}>
          <Button
            className={styles.button}
            type="default"
            onClick={toggleLoginModal(true)}
          >
            Login
          </Button>
          <Button
            className={styles.button}
            type="primary"
            onClick={toggleRegisterModal(true)}
          >
            Go Premium
          </Button>
        </div> */}
      </div>
      {/* {openLoginModal?.get() && (
        <LoginModal
          open={openLoginModal?.get()} 
          onClose={toggleLoginModal(false)}
        />
      )}
      {openRegisterModal?.get() && (
        <RegisterModal 
          open={openRegisterModal?.get()}
          onClose={toggleRegisterModal(false)}
        />
      )} */}
    </>
  );
};

export default memo(LowerHero);
