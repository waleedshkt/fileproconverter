import React, { memo } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as styles from "./index.module.css";

const Terms = () => {
  
  return (
    <div className={styles.terms}>
      <Header />
      <div className={styles.headerSection}>
        <div className={styles.heading}>Terms of Service</div>
      </div>
      <div className={styles.richTextSection}>
        <div className={styles.richText}>
          <div className={styles.section}>
            <div className={styles.paragraph}>
              By accessing our website, you agree to these terms of use,
              including our Privacy Policy. If you disagree, your option is to
              discontinue using our website. We may revise these terms of use
              periodically, so it is advisable to review them each time you
              visit our site.
            </div>
          </div>
          <div className={styles.section1}>
            <div className={styles.heading1}>
              <ol className={styles.agreement}>
                <li>Agreement</li>
              </ol>
            </div>
            <div className={styles.paragraph1}>
              The terms of use represent the complete agreement between you and
              us regarding your utilization of our website.
            </div>
          </div>
          <div className={styles.section1}>
            <div className={styles.heading1}>
              <ol className={styles.agreement}>
                <li>Links Disclaimer</li>
              </ol>
            </div>
            <div className={styles.paragraph1}>
              We cannot control the information you may encounter through links
              on our site. Proceed with these links at your own discretion.
            </div>
          </div>
          <div className={styles.section3}>
            <div className={styles.heading3}>
              <ol className={styles.agreement}>
                <li>No Illegal or Prohibited Use</li>
              </ol>
            </div>
            <div
              className={styles.paragraph1}
            >{`You agree that your use of this website is contingent upon your assurance that you will not employ it for any purposes that are illegal or forbidden by these terms of use. `}</div>
          </div>
          <div className={styles.section3}>
            <div className={styles.heading3}>
              <ol className={styles.agreement}>
                <li>Disclaimer</li>
              </ol>
            </div>
            <div className={styles.paragraph1}>
              The information available on this website is offered "as is,"
              without any warranties or conditions of any nature. While we
              strive to ensure the accuracy of our website's content, we cannot
              assure its reliability, accuracy, or completeness, as this
              information is subject to frequent changes. You acknowledge that
              no information or advice we provide constitutes medical, legal,
              financial, or any other regulated industry advice, and users
              should not solely rely on such information or advice.
            </div>
          </div>
          <div className={styles.section3}>
            <div className={styles.heading3}>
              <ol className={styles.agreement}>
                <li>Termination/ Access Restriction</li>
              </ol>
            </div>
            <div className={styles.paragraph1}>
              We retain the authority to revoke your access to this website and
              its related services, or any part thereof, at any time and without
              prior notice.
            </div>
          </div>
          <div className={styles.section1}>
            <div className={styles.heading1}>
              <ol className={styles.agreement}>
                <li>Applicable Law</li>
              </ol>
            </div>
            <div className={styles.paragraph1}>
              Should any issues related to this website “FreeConvert.com” arise
              in a court of law, whether before or after arbitration, viewers,
              visitors, members, subscribers, or customers agree that the only
              appropriate jurisdiction is the state, city, and country of the
              website owner, unless specified otherwise. If the litigation
              occurs in a federal court, the appropriate venue will be the
              nearest federal court to the website owner’s address.
            </div>
          </div>
          <div className={styles.section3}>
            <div className={styles.heading3}>
              <ol className={styles.agreement}>
                <li>Limitation of Liability</li>
              </ol>
            </div>
            <div className={styles.paragraph1}>
              We shall not be responsible for any damages incurred by you or any
              other individual or entity resulting from your use of this website
              in any manner. Furthermore, in cases where warranties are implied
              by law, you agree that our total liability is restricted to the
              amount you paid for the specific services that led to the cause of
              action, even if those services were provided at no cost. This
              limitation of liability is enforceable to the maximum extent
              allowed by law and shall remain effective even after the
              termination or expiration of this agreement or your use of this
              website or the services offered on this platform.
            </div>
          </div>
          <div className={styles.section3}>
            <div className={styles.heading3}>
              <ol className={styles.agreement}>
                <li>File Ownership and Privacy</li>
              </ol>
            </div>
            <div className={styles.paragraph1}>
              When you utilize our Services, you share your files with us. Rest
              assured, your files remain your property. These Terms do not grant
              us any rights over your files, except for the necessary
              permissions to provide our Services. For instance, we require your
              consent to perform actions such as converting your files and
              temporarily storing them (via a private URL accessible solely to
              you for downloading the converted file). To execute file
              conversion and delivery, we need to access and store your files.
              You authorize us to perform these actions. Additionally, please be
              aware that we delete all files from our servers within 8 hours of
              conversion.
            </div>
          </div>
          <div className={styles.section3}>
            <div className={styles.heading3}>
              <ol className={styles.agreement}>
                <li>Prohibition of Uploading Copyrighted Content</li>
              </ol>
            </div>
            <div className={styles.paragraph1}>
              <p className={styles.consequencesOfViolationSho}>
                <b
                  className={styles.consequencesOfViolation}
                >{`9.1 Consequences of Violation: `}</b>
                <span
                  className={styles.consequencesOfViolation}
                >{`Should you breach these terms, your account might be suspended or terminated, and any infringing content will be promptly removed. Continuous violations could lead to a permanent ban from our services.
`}</span>
                <b
                  className={styles.consequencesOfViolation}
                >{`9.2 Prohibition of Circumvention Tools: `}</b>
                <span
                  className={styles.consequencesOfViolation}
                >{`Please refrain from using our services to upload or transform content from platforms that employ technological protection measures (TPMs) or digital rights management (DRM) systems, like YouTube, iTunes, or other streaming services, without proper authorization. It is strictly forbidden to attempt to bypass or tamper with DRM or any copy-protection technology.
`}</span>
                <b
                  className={styles.consequencesOfViolation}
                >{`9.3 User Responsibility: `}</b>
                <span
                  className={styles.consequencesOfViolation}
                >{`Users are expressly forbidden from uploading, sharing, or distributing any content that violates the copyrights or other intellectual property rights of any third party. By utilizing our services, you agree not to upload content that you do not have the legal authority to distribute.
`}</span>
                <b
                  className={styles.consequencesOfViolation}
                >{`9.4 Monitoring and Compliance: `}</b>
                <span
                  className={styles.consequencesOfViolation}
                >{`Although we do not constantly monitor all content uploaded to our platform, we maintain the right to evaluate, remove, or restrict access to any content that, at our sole discretion, we believe breaches our terms. This includes, but is not limited to, content that infringes on intellectual property rights.
`}</span>
                <b
                  className={styles.consequencesOfViolation}
                >{`9.5 User Verification and Accountability: `}</b>
                <span
                  className={styles.consequencesOfViolation}
                >{` Users may be required to confirm their ownership or rights to any content they upload. It is your responsibility to ensure that your use of our service complies with all laws and does not infringe upon any third-party rights.
`}</span>
                <b className={styles.consequencesOfViolation}>
                  9.6 DMCA Compliance:
                </b>
                <span
                  className={styles.consequencesOfViolation}
                >{` FileProConverter.com operates as an Online Service Provider under the Digital Millennium Copyright Act (DMCA), specifically 17 U.S.C. §512. This law allows you to request that an Online Service Provider remove access to material that infringes on copyrights. FileProConverter.com adheres to the DMCA regulations. If you find that your copyrighted material has been uploaded to our site without your consent, you can file a DMCA take-down notice with our designated agent.
`}</span>
                <b
                  className={styles.consequencesOfViolation}
                >{`9.7 Submission of DMCA Notices: `}</b>
                <span
                  className={styles.toFileA}
                >{`To file a DMCA takedown notice, please provide the following:
9.7.1 A physical or digital signature from the copyright holder or an individual authorized to represent them;  `}</span>
              </p>
              <p className={styles.consequencesOfViolationSho}>
                <span
                  className={styles.toFileA}
                >{`9.7.2 Details identifying the copyrighted work that is allegedly being infringed;  `}</span>
              </p>
              <p className={styles.consequencesOfViolationSho}>
                <span
                  className={styles.toFileA}
                >{`9.7.3 Clear identification of the infringing material, along with information sufficient to help us locate it;  `}</span>
              </p>
              <p className={styles.consequencesOfViolationSho}>
                <span
                  className={styles.toFileA}
                >{`9.7.4 Your contact details, which should include your address, phone number, and email address;  `}</span>
              </p>
              <p className={styles.consequencesOfViolationSho}>
                <span
                  className={styles.toFileA}
                >{`9.7.5 A declaration that you sincerely believe the material's use is not permitted by the copyright owner, their representative, or the law;  `}</span>
              </p>
              <p className={styles.consequencesOfViolationSho}>
                <span
                  className={styles.toFileA}
                >{`9.7.6 An affirmation that the information in the notice is accurate, and under the penalty of perjury, that you have the authority to act on behalf of the copyright owner.
`}</span>
                <b
                  className={styles.consequencesOfViolation}
                >{`9.8 Counter-Notification: `}</b>
                <span className={styles.consequencesOfViolation}>
                  If you believe your content was mistakenly removed or
                  disabled, you have the option to submit a
                  counter-notification. To do so, please include the following
                  details:
                </span>
              </p>
              <p className={styles.consequencesOfViolationSho}>
                <span className={styles.consequencesOfViolation}>
                  9.8..1 Your physical or electronic signature;
                </span>
              </p>
              <p className={styles.consequencesOfViolationSho}>
                <span className={styles.consequencesOfViolation}>
                  9.8.2 Identification of the material that has been removed or
                  disabled, along with the location where it was before the
                  removal or disabling;
                </span>
              </p>
              <p className={styles.consequencesOfViolationSho}>
                <span className={styles.consequencesOfViolation}>
                  9.8.3 A sworn statement, under penalty of perjury, affirming
                  your good faith belief that the material was removed or
                  disabled due to an error or misidentification;
                </span>
              </p>
              <p className={styles.consequencesOfViolationSho}>
                <span className={styles.consequencesOfViolation}>
                  9.8.4 Your name, address, phone number, and email address;
                </span>
              </p>
              <p className={styles.consequencesOfViolationSho}>
                <span className={styles.consequencesOfViolation}>
                  9.8.5 A declaration that you consent to the jurisdiction of
                  the federal court in your district, or if you reside outside
                  the U.S., the jurisdiction of the federal court where
                  FileProConverter.com is located, and that you agree to accept
                  service of process from the individual who submitted the
                  original DMCA notification or their agent.
                </span>
              </p>
              <p className={styles.consequencesOfViolationSho}>
                <b className={styles.consequencesOfViolation}>
                  9.9 Repeat Infringers:
                </b>
                <span className={styles.consequencesOfViolation}>
                  {" "}
                  FileProConverter.com will deactivate accounts of users
                  identified as repeat infringers.
                </span>
              </p>
              <p className={styles.consequencesOfViolationSho}>
                <b
                  className={styles.consequencesOfViolation}
                >{`9.10 Copyright Agent: `}</b>
                <span className={styles.ourDesignatedCopyright}>
                  Our Designated Copyright Agent to receive notification of
                  claimed infringement can be reached
                  at: Email: applicove@gmail.
                </span>
                <a
                  className={styles.com}
                  href="mailto:dmca@freeconvert.com"
                  target="_blank"
                >
                  <span className={styles.ourDesignatedCopyright}>
                    <span className={styles.com2}>com</span>
                  </span>
                </a>
                <span className={styles.ourDesignatedCopyright}>
                   Name: Waleed Shaukat
                </span>
              </p>
              <p className={styles.consequencesOfViolationSho}>
                <b
                  className={styles.consequencesOfViolation}
                >{`9.11 Policy Updates: `}</b>
                <span className={styles.consequencesOfViolation}>
                  We reserve the right to modify this policy at any moment.
                  Users will be informed of major changes via our website or
                  through email.
                </span>
              </p>
              <p className={styles.byUsingOurServicesYouAck}>
                <span className={styles.consequencesOfViolation}>
                  By using our services, you acknowledge and agree to comply
                  with these terms regarding the uploading of copyrighted
                  content and the handling of DMCA reports
                </span>
              </p>
            </div>
          </div>
          <div className={styles.section3}>
            <div className={styles.heading3}>
              <ol className={styles.agreement}>
                <li>Copyright</li>
              </ol>
            </div>
            <div className={styles.paragraph1}>
              The entire content of this website is copyrighted by
              FileProConverter.com. Unless stated otherwise, we either own or
              are authorized to use the copyright for all materials on our site.
              If you need permission to reproduce any contents from this site,
              please contact us. We might not always be able to authorize usage,
              especially concerning trademarks or materials belonging to other
              companies. You are allowed to use our copyrighted materials solely
              for personal purposes, meaning you can access, download, or print
              these materials for your personal use only. Any form of commercial
              use is strictly forbidden.
            </div>
          </div>
          <div className={styles.section3}>
            <div className={styles.heading3}>
              <ol className={styles.agreement}>
                <li>Material Connection Disclosure</li>
              </ol>
          </div>
            <div className={styles.paragraph1}>
              <p className={styles.consequencesOfViolationSho}>
                We may promote products or services from other individuals or
                businesses and could receive affiliate commissions from
                purchases you make. However, you are not obligated to buy
                anything we recommend. It is always advised to conduct your own
                research before purchasing any product or service mentioned on
                FileProConverter.com. All recommendations are made sincerely,
                reflecting the writer's opinion at the time of mention on the
                website.
              </p>
              <p className={styles.byUsingOurServicesYouAck}>
                For inquiries, please contact: applicove@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default memo(Terms);
