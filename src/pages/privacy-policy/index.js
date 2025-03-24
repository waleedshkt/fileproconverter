import React, { memo } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as styles from "./index.module.css";

const Privacy = () => {

  return (
    <div className={styles.privacy}>
      <Header />
      <main className={styles.privacy}>
        <div className={styles.headerSection}>
          <div className={styles.heading}>Privacy Policy</div>
        </div>
        <div className={styles.richTextSection}>
          <div className={styles.richText}>
            <div className={styles.section}>
              <div className={styles.paragraph}>
                <p className={styles.thisDocumentOutlines}>
                  This document outlines the privacy practices of FileProConverter
                  concerning all services we offer.
                </p>
                <p className={styles.thisDocumentOutlines}>
                  At FileProConverter, we are committed to safeguarding your
                  privacy when you engage with our services and communicate with
                  us. We prioritize the protection of your privacy and have
                  implemented several measures to ensure your information remains
                  secure and confidential. According to various privacy laws, it
                  is important to inform you that FileProConverter acts as the
                  Data Controller of your information.
                </p>
                <p className={styles.thisDocumentOutlines}>
                  In the following question and answer section, we address several
                  inquiries about our privacy practices. These responses are
                  designed to clarify how we protect your information and inform
                  you of your rights regarding your personal data.
                </p>
                <p className={styles.thisDocumentOutlines}>
                  If you have shared personal data of other individuals or
                  organizations with us (such as colleagues, for example), please
                  ensure they are aware of our privacy policy. Additionally, only
                  share their data if you have explicit authorization to do so.
                </p>
                <p className={styles.thisDocumentOutlines}>
                  This privacy policy has been prepared with consideration of data
                  regulations such as the EU General Data Protection Regulation
                  (GDPR).
                </p>
                <p className={styles.shouldYouHave}>
                  Should you have any further questions about any aspect of our
                  privacy policy, please reach out to us using the contact
                  information provided at the bottom of this page.
                </p>
              </div>
            </div>
            <div className={styles.section1}>
              <div className={styles.heading1}>
                What information do we collect?
              </div>
              <div className={styles.paragraph1}>
                <p className={styles.thisDocumentOutlines}>
                  User files, including those uploaded, converted, edited, as well
                  as images and signature images, are temporarily stored on Amazon
                  Web Services (AWS) Elastic Block Storage (EBS) in the United
                  States of America.
                </p>
                <p
                  className={styles.thisDocumentOutlines}
                >{`It's important to understand that we do not access or view your files. We will only do so with your explicit, written consent, unless required by legal obligations. You retain all rights and ownership of your files.
  To monitor errors, we utilize Amazon CloudWatch Logs and Elastic Compute Service (EC2) Logs. When an error occurs, EC2 Logs records the error details along with information such as your browser type, operating system and IP address.`}</p>
                <p className={styles.thisDocumentOutlines}>
                  For monitoring traffic and user behavior on our website, we use
                  Google Analytics.
                </p>
                <p className={styles.shouldYouHave}>
                  Please be aware that some of the mentioned services make use of
                  cookies, which are discussed in the subsequent section about
                  cookies.
                </p>
              </div>
            </div>
            <div className={styles.section1}>
              <div className={styles.heading1}>
                How do we use your information?
              </div>
              <div className={styles.paragraph1}>
                Our aim in gathering personal data is to provide adequate support
                and continuously enhance our products. Specifically, any
                information we collect from you will be solely utilized for
                temporarily storing your files on cloud converts and monitoring
                the service to improve the products.
              </div>
            </div>
            <div className={styles.section3}>
              <div className={styles.heading3}>
                Do we use cookies and other tracking technologies?
              </div>
              <div
                className={styles.paragraph3}
              >{`We do not use cookies to track your information. But we do employ Google Analytics to track the user behavior and website traffic. `}</div>
            </div>
            <div className={styles.section3}>
              <div className={styles.heading3}>
                How long do we keep your information?
              </div>
              <div className={styles.paragraph1}>
                Your data is kept from the moment you upload the file till it gets
                converted into format. In other words, we retain your data till
                the format conversion process gets completed. As soon as it is
                done, our system automatically deletes the files. .
              </div>
            </div>
            <div className={styles.section3}>
              <div className={styles.heading3}>
                How do we keep your information safe?
              </div>
              <div
                className={styles.paragraph1}
              >{`We use industry’s best practices to ensure your data stays safe while in storage and in transit. We use HTTPS channel to securely transmit the files to our servers. Our servers live on the Amazon Web Services cloud in the countries that comply with GDPR. `}</div>
            </div>
            <div className={styles.section1}>
              <div className={styles.heading1}>What are your privacy rights?</div>
              <div className={styles.paragraph1}>
                <p className={styles.thisDocumentOutlines}>
                  You are entitled to access, update, and erase any personal data
                  we hold about you. Additionally, you have the right to limit our
                  processing of your data or transfer it to another data
                  controller, known as data portability rights. To exercise these
                  rights, you must verify your identity, for instance, by
                  providing a copy of an identity document.
                </p>
                <p className={styles.thisDocumentOutlines}>
                  Please be aware that there may be instances where we cannot
                  fulfill your requests due to our own legal obligations. If
                  exercising your rights conflicts with your contractual
                  obligations to FileProConverter, this could lead to early
                  contract termination or additional costs. Should this occur, we
                  will notify you beforehand.
                </p>
                <p className={styles.shouldYouHave}>
                  Furthermore, you have the option to enforce your rights through
                  legal action or by filing a complaint with the appropriate
                  authority. For more information, please refer to our Terms and
                  Conditions page.
                </p>
              </div>
            </div>
            <div className={styles.section3}>
              <div className={styles.heading3}>
                Why do I have to accept the terms provided in this policy?
              </div>
              <div className={styles.paragraph1}>
                <p className={styles.thisDocumentOutlines}>
                  FileProConverter, due to the nature of our operations, process
                  your data and transmit across international borders.
                </p>
                <p className={styles.thisDocumentOutlines}>
                  This Privacy Policy is crafted to provide you with all necessary
                  information in a straightforward manner. We want you to be able
                  to make an informed decision before using our service or
                  reaching out to us.
                </p>
                <p className={styles.thisDocumentOutlines}>
                  By utilizing our service, you consent to the processing of your
                  personal data as outlined in this document.
                </p>
                <p className={styles.shouldYouHave}>
                  Should you have any questions or concerns about our Privacy
                  Policy, please feel free to contact us at applicove@gmail.com.
                  We are here to assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default memo(Privacy);
