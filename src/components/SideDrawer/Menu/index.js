import React, { memo, useCallback, useEffect } from "react";
import { useHookstate as useState } from "@hookstate/core";
import { Link } from "gatsby";
import { Button, List } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import * as styles from "./side-menu.module.css";

import lazyLoad from "../../../helpers/lazyLoad";
const LoginModal = lazyLoad("Modals/Login");
const RegisterModal = lazyLoad("Modals/Register");

const FILE_CONVERTERS_LIST = [
  { name: "Video Converter", link: "/video-converter" },
  { name: "Audio Converter", link: "/audio-converter" },
  { name: "E-book Converter", link: "/ebook-converter" },
  { name: "Image Converter", link: "/image-converter" },
  { name: "Archive Converter", link: "/archive-converter" },
  { name: "Vector Converter", link: "/vector-converter" },
  { name: "Document Converter", link: "/document-converter" },
  { name: "Video to MP3", link: "/convert/video-to-mp3" },
  { name: "PDF Converter", link: "/pdf-converter" },
  { name: "Image to PDf", link: "/convert/image-to-pdf" },
  { name: "Image to Word", link: "/convert/image-to-word" }
];

const SideMenu = ({ onClose }) => {
  const openLoginModal = useState(false);
  const openRegisterModal = useState(false);

  const toggleRegisterModal = useCallback(open => () => openRegisterModal?.set(open), []);

  const toggleLoginModal = useCallback(open => () => openLoginModal?.set(open), []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );
    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <>
      <div
        className={styles.sidemenu}
        data-animate-on-scroll
      >
        <div className={styles.xParent}>
          <Button 
            type="text"
            className={styles.xIcon} 
            icon={<CloseOutlined />} 
            onClick={onClose} 
          />
          <List 
            size="large"
            bordered={false}
            dataSource={FILE_CONVERTERS_LIST} 
            renderItem={(item) => <List.Item><Link to={item.link}>{item.name}</Link></List.Item>}
            className={styles.buttonBaseParent}
          />  
        </div>
        <div className={styles.navigationActions}>
          <Button 
            type="text"
            className={styles.buttonBase5} 
            onClick={toggleLoginModal(true)}
          >
            <span className={styles.text1}>Log in</span>
          </Button>
          <Button 
            type="primary"
            className={styles.buttonBase6} 
            onClick={toggleRegisterModal(true)}
          >
            <span className={styles.text6}>Go Premium</span>
          </Button>
        </div>
      </div>
      {openLoginModal?.get() && (
        <LoginModal 
          onClose={toggleLoginModal(false)}
        />
      )}
      {openRegisterModal?.get() && (
        <RegisterModal 
          onClose={toggleRegisterModal(false)}
        />
      )}
    </>
  );
};

export default memo(SideMenu);
