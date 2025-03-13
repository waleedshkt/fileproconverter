import React, { useState, useCallback } from "react";
import { useHookstate as useState } from "@hookstate/core";
import { Button } from "antd";
import FormatsModal from "../components/Modals/Formats";
import PortalModal from "../components/Modals/Portal";
import Header from "../components/Header";
import USPSection from "../components/UspSection";
import HowToConvert from "../components/HowToConvertSection";
import Conversions from "../components/Conversions";
import FormatsOverview from "../components/FormatsOverview";
import LowerHero from "../components/LowerHero";
import Footer from "../components/Footer";
import * as styles from "./index.module.css";

const Page = () => {
  const [isFormatsModalOpen, setFormatsModalOpen] = useState(false);

  const openFormatsModal = useCallback(() => {
    setFormatsModalOpen(true);
  }, []);

  const closeFormatsModal = useCallback(() => {
    setFormatsModalOpen(false);
  }, []);

  return (
    <>
      <div className={styles.page}>
        <Header />
        <main className={styles.body}>
          <div className={styles.main}>
            <div className={styles.adWrapper}>
              <div className={styles.ad} />
            </div>
            <section className={styles.content}>
              <div className={styles.content1}>
                <div className={styles.heroSection}>
                  <div className={styles.fileConverterParent}>
                    <div className={styles.fileConverter}>File Converter</div>
                    <div className={styles.securelyConvertFiles}>
                      Securely convert files online from one format to another
                    </div>
                  </div>
                  <div className={styles.inputParent}>
                    <div className={styles.input} onClick={openFormatsModal}>
                      <div className={styles.content2}>
                        <img
                          className={styles.dotIcon}
                          alt=""
                          src="/-dot.svg"
                        />
                        <div className={styles.text}>From</div>
                      </div>
                      <img
                        className={styles.chevronDownIcon}
                        alt=""
                        src="/chevrondown1.svg"
                      />
                    </div>
                    <div className={styles.input} onClick={openFormatsModal}>
                      <div className={styles.content2}>
                        <img
                          className={styles.dotIcon}
                          alt=""
                          src="/-dot.svg"
                        />
                        <div className={styles.text}>To</div>
                      </div>
                      <img
                        className={styles.chevronDownIcon}
                        alt=""
                        src="/chevrondown1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.arrowarcrightParent}>
                    <Button
                      className={styles.arrowarcright}
                      style={{ width: "32px" }}
                      type="text"
                    />
                    <Button
                      className={styles.arrowarcright1}
                      style={{ width: "32px" }}
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.ad1} />
                <div className={styles.uploadSection}>
                  <Button className={styles.mainButton}>
                    <Button className={styles.buttonBase} type="primary">
                      Select Files
                    </Button>
                    <Button
                      className={styles.buttonBase1}
                      style={{ width: "60px" }}
                      type="primary"
                    />
                  </Button>
                  <div className={styles.maxFileSize}>Max File Size: 2GB</div>
                </div>
                <div className={styles.ad2} />
                <USPSection />
              </div>
              <HowToConvert />
              <Conversions />
              <div className={styles.divider} />
              <FormatsOverview />
              <div className={styles.ad3} />
            </section>
            <div className={styles.adWrapper}>
              <div className={styles.ad4} />
            </div>
          </div>
          <LowerHero />
        </main>
        <Footer />
      </div>
      {isFormatsModalOpen && (
        <PortalModal
          overlayColor="rgba(127, 86, 217, 0.3)"
          placement="Centered"
          onOutsideClick={closeFormatsModal}
        >
          <FormatsModal onClose={closeFormatsModal} />
        </PortalModal>
      )}
    </>
  );
};

export default Page;
