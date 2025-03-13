import * as React from "react";
import { memo, useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import ModalSubscribe2 from "/";
import PortalPopup from "./portal-popup";
import PropTypes from "prop-types";
import * as styles from "./lower-hero.module.css";

const LowerHero = memo(({ className = "" }) => {
  const [isModalSubscribe1Open, setModalSubscribe1Open] = useState(false);

  const openModalSubscribe1 = useCallback(() => {
    setModalSubscribe1Open(true);
  }, []);

  const closeModalSubscribe1 = useCallback(() => {
    setModalSubscribe1Open(false);
  }, []);

  return (
    <>
      <div className={[styles.lowerHero, className].join(" ")}>
        <div className={styles.headingAndSupportingText}>
          <div
            className={styles.heading}
          >{`Unlimited file conversions. No ads. `}</div>
          <div className={styles.supportingText}>
            Convert as much files as you like in different formats for only $12
            per year subscription.
          </div>
        </div>
        <div className={styles.actions}>
          <Button
            className={styles.button}
            type="default"
            onClick={openModalSubscribe1}
          >
            Login
          </Button>
          <Button
            className={styles.button}
            type="primary"
            onClick={openModalSubscribe1}
          >
            Go Premium
          </Button>
        </div>
      </div>
      {isModalSubscribe1Open && (
        <PortalPopup
          overlayColor="rgba(127, 86, 217, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalSubscribe1}
        >
          <ModalSubscribe2 onClose={closeModalSubscribe1} />
        </PortalPopup>
      )}
    </>
  );
});

LowerHero.propTypes = {
  className: PropTypes.string,
};

export default LowerHero;
