import * as React from "react";
import { memo, useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import ModalSubscribe2 from "/";
import PortalPopup from "./portal-popup";
import SideMenu from "./side-menu";
import PortalDrawer from "./portal-drawer";
import PropTypes from "prop-types";
import * as styles from "./header.module.css";

const Header = memo(({ className = "" }) => {
  const [isModalSubscribe1Open, setModalSubscribe1Open] = useState(false);
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const openModalSubscribe1 = useCallback(() => {
    setModalSubscribe1Open(true);
  }, []);

  const closeModalSubscribe1 = useCallback(() => {
    setModalSubscribe1Open(false);
  }, []);

  const openSideMenu = useCallback(() => {
    setSideMenuOpen(true);
  }, []);

  const closeSideMenu = useCallback(() => {
    setSideMenuOpen(false);
  }, []);

  return (
    <>
      <header className={[styles.header, className].join(" ")}>
        <div className={styles.container}>
          <div className={styles.navLeft}>
            <div className={styles.logoWrap}>
              <div className={styles.logomark}>
                <img className={styles.contentIcon} alt="" src="/content.svg" />
              </div>
              <b className={styles.anyConvertercom}>Any-Converter.com</b>
            </div>
            <div className={styles.dropdownHeaderNavigationTri}>
              <div className={styles.button}>
                <div className={styles.buttonBase}>
                  <div className={styles.text}>Categories</div>
                  <img
                    className={styles.chevronDownIcon}
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mobileMenuBtn} onClick={openSideMenu}>
            <div className={styles.buttonBase1}>
              <div className={styles.text1}>Book demo</div>
            </div>
          </div>
          <div className={styles.desktopNavBtns}>
            <Button
              className={styles.button1}
              type="text"
              onClick={openModalSubscribe1}
            >
              Log in
            </Button>
            <Button
              className={styles.button1}
              type="primary"
              onClick={openModalSubscribe1}
            >
              Go Premium
            </Button>
          </div>
        </div>
      </header>
      {isModalSubscribe1Open && (
        <PortalPopup
          overlayColor="rgba(127, 86, 217, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalSubscribe1}
        >
          <ModalSubscribe2 onClose={closeModalSubscribe1} />
        </PortalPopup>
      )}
      {isSideMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(127, 86, 217, 0.3)"
          placement="Right"
          onOutsideClick={closeSideMenu}
        >
          <SideMenu onClose={closeSideMenu} />
        </PortalDrawer>
      )}
    </>
  );
});

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
