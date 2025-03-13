import * as React from "react";
import PropTypes from "prop-types";
import * as styles from "./mega-menu-categories.module.css";

const MegaMenuCategories = ({ className = "" }) => {
  return (
    <div className={[styles.megaMenuCategories, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.footerLinksColumn}>
            <div className={styles.heading}>Image Converter</div>
            <div className={styles.footerLinks}>
              <div className={styles.buttonBase}>
                <div className={styles.text}>PDF to JPG</div>
              </div>
              <div className={styles.buttonBase}>
                <div className={styles.text}>JPG to PDF</div>
              </div>
              <div className={styles.buttonBase}>
                <div className={styles.text}>HEIC to JPG</div>
              </div>
              <div className={styles.buttonBase}>
                <div className={styles.text}>Image to PDF</div>
              </div>
              <div className={styles.buttonBase}>
                <div className={styles.text}>Image Converter</div>
              </div>
            </div>
          </div>
          <div className={styles.footerLinksColumn}>
            <div className={styles.heading}>Audio Converter</div>
            <div className={styles.footerLinks}>
              <div className={styles.buttonBase}>
                <div className={styles.text}>MP4 to MP3</div>
              </div>
              <div className={styles.buttonBase}>
                <div className={styles.text}>Video to MP3</div>
              </div>
              <div className={styles.buttonBase}>
                <div className={styles.text}>Audio Converter</div>
              </div>
              <div className={styles.buttonBase}>
                <div className={styles.text}>MP3 Converter</div>
              </div>
            </div>
          </div>
          <div className={styles.footerLinksColumn}>
            <div className={styles.heading}>Video Converter</div>
            <div className={styles.footerLinks}>
              <div className={styles.buttonBase}>
                <div className={styles.text}>Video to GIF</div>
              </div>
              <div className={styles.buttonBase}>
                <div className={styles.text}>Video Converter</div>
              </div>
              <div className={styles.buttonBase}>
                <div className={styles.text}>MOV to MP4</div>
              </div>
              <div className={styles.buttonBase}>
                <div className={styles.text}>MP4 Converter</div>
              </div>
            </div>
          </div>
          <div className={styles.footerLinksColumn}>
            <div className={styles.heading}>{`Document & Ebook Converter`}</div>
            <div className={styles.footerLinks}>
              <div className={styles.buttonBase}>
                <div className={styles.text}>PDf to WORD</div>
              </div>
              <div className={styles.buttonBase}>
                <div className={styles.text}>UPUB to MOBI</div>
              </div>
              <div className={styles.buttonBase}>
                <div className={styles.text}>EPUB to PDF</div>
              </div>
              <div className={styles.buttonBase}>
                <div className={styles.text}>Document Converter</div>
              </div>
              <div className={styles.buttonBase}>
                <div className={styles.text}>Ebook Converter</div>
              </div>
              <div className={styles.footerLink}>
                <div className={styles.buttonBase18}>
                  <div className={styles.text18}>PDF to JPG</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MegaMenuCategories.propTypes = {
  className: PropTypes.string,
};

export default MegaMenuCategories;
