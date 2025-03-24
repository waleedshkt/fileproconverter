import React, { memo } from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./index.module.css";

const USPSection = ({ }) => (
  <div className={styles.uspSection}>
    <div className={styles.highlySecureParent}>
      <div className={styles.highlySecure}>Highly Secure</div>
      <div className={styles.withSsltcpEncryption}>
        With SSL/TCP Encryption, your data is transferred and proessed safely.
      </div>
      <div className={styles.shieldcheckIcon}>
        <StaticImage 
          alt="Highly Secure"
          objectFit="contain"
          layout="full-width"
          src="../../images/shield-check.png"
        />
      </div>
    </div>
    <div className={styles.autoDeletionParent}>
      <div className={styles.autoDeletion}>Auto Deletion</div>
      <div className={styles.withSsltcpEncryption}>
        We ensure your data gets removed after each conversion for further
        data protection.
      </div>
      <div className={styles.shieldcheckIcon}>
        <StaticImage 
          alt="Auto Deletion"
          objectFit="contain"
          layout="full-width"
          src="../../images/eraser.png"
        />
      </div>
    </div>
    <div className={styles.cloudRunParent}>
      <div className={styles.cloudRun}>Cloud Run</div>
      <div className={styles.withSsltcpEncryption}>
        We can be accessed from anywhere on Windows, Mac, Linux or mobile
        devices.
      </div>
      <div className={styles.shieldcheckIcon}>
        <StaticImage 
          alt="Cloud Run"
          objectFit="contain"
          layout="full-width"
          src="../../images/cloud-check.png"
        />
      </div>
    </div>
  </div>
);

export default memo(USPSection);
