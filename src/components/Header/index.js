import React, { memo, useCallback, useMemo } from "react";
import { useHookstate as useState } from "@hookstate/core";
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Button, Dropdown, Space } from "antd";
import { MenuOutlined, CrownOutlined, DownOutlined } from "@ant-design/icons";
import SideMenu from "../SideDrawer/Menu";
import PortalDrawer from "../SideDrawer/Portal";
import * as styles from "./index.module.css";

/* import { isAuth, subscription } from "../../globalStates";

import lazyLoad from "../../helpers/lazyLoad";
const LoginModal = lazyLoad("Modals/Login");
const RegisterModal = lazyLoad("Modals/Register");
const SubscribedModal = lazyLoad("Modals/Subscribed"); */

const Header = ({  }) => {
  // const isAuth_ = useState(isAuth); //global
  // const { subscribed } = useState(subscription); //global
  // const openLoginModal = useState(false);
  // const openRegisterModal = useState(false);
  // const openSubscribedModal = useState(false);
  const openSideMenu = useState(false);

  const dropdownItems = useMemo(() => [
    { key: "1", label: <Link className={styles.dropdownItem} to="/video-converter">Video Converter</Link> },
    { key: "2", label: <Link className={styles.dropdownItem} to="/audio-converter">Audio Converter</Link> },
    { key: "3", label: <Link className={styles.dropdownItem} to="/ebook-converter">E-book Converter</Link> },
    { key: "4", label: <Link className={styles.dropdownItem} to="/image-converter">Image Converter</Link> },
    { key: "5", label: <Link className={styles.dropdownItem} to="/archive-converter">Archive Converter</Link> },
    { key: "6", label: <Link className={styles.dropdownItem} to="/vector-converter">Vector Converter</Link> },
    { key: "7", label: <Link className={styles.dropdownItem} to="/document-converter">Document Converter</Link> },
    { key: "8", label: <Link className={styles.dropdownItem} to="/video-to-mp3">Video to MP3</Link> },
    { key: "9", label: <Link className={styles.dropdownItem} to="/pdf-converter">PDf Converter</Link> },
    { key: "10", label: <Link className={styles.dropdownItem} to="/image-to-pdf">Image to PDF</Link> },
    { key: "11", label: <Link className={styles.dropdownItem} to="/image-to-word">Image to Word</Link> }
  ], []);

  // const toggleRegisterModal = useCallback(open => () => openRegisterModal?.set(open), []);

  // const toggleLoginModal = useCallback(open => () => openLoginModal?.set(open), []);

  // const toggleSubscribedModal = useCallback(open => () => openSubscribedModal?.set(open), []);

  const toggleSideMenu = useCallback(open => () => openSideMenu?.set(open), []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.navLeft}>
            <div className={styles.logoWrap} aria-label="FileProConverter.com" onClick={() => navigate("/")}>
              <div className={styles.logomark}>
                <StaticImage 
                  layout="fullWidth"
                  objectFit="contain"
                  className={styles.contentIcon} 
                  alt="FileProConverter.com" 
                  src="../../images/logo.png" 
                />
              </div>
              <b className={styles.anyConvertercom}>FileProConverter.com</b>
            </div>
            <div className={styles.dropdownHeaderNavigationTri}>
              <Dropdown
                menu={{ items: dropdownItems}}
              >
                <a onClick={e => e.preventDefault()}>
                  <Space>
                    Tools
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
          <Button 
            type="text"
            className={styles.mobileMenuBtn} 
            onClick={toggleSideMenu(true)}
            icon={(
              <MenuOutlined />
            )}
          />
          {/* <div className={styles.desktopNavBtns}>
            {(!isAuth_?.get() || (isAuth?.get() && !subscribed?.get())) ? (
              <>
                <Button
                  className={styles.button1}
                  type="text"
                  onClick={toggleLoginModal(true)}
                >
                  Log in
                </Button>
                <Button
                  className={styles.button1}
                  type="primary"
                  onClick={toggleRegisterModal(true)}
                >
                  Go Premium
                </Button>
              </>
            ) : (
              <Button 
                className={styles.button1}
                type="text"
                onClick={toggleSubscribedModal(true)}
                icon={(
                  <CrownOutlined />
                )}
              />
            )}
          </div> */}
        </div>
      </header>
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
      )}
      {openSubscribedModal?.get() && (
        <SubscribedModal 
          open={openSubscribedModal?.get()}
          onClose={toggleSubscribedModal(false)}
        />
      )} */}
      {openSideMenu?.get() && (
        <PortalDrawer
          overlayColor="rgba(127, 86, 217, 0.3)"
          placement="Right"
          onOutsideClick={toggleSideMenu(false)}
        >
          <SideMenu onClose={toggleSideMenu(false)} />
        </PortalDrawer>
      )}
    </>
  );
};

export default memo(Header);
