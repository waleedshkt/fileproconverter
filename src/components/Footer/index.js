import * as React from "react";
import { memo } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import * as styles from "./footer.module.css";

const Footer = memo(({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.footerLinksColumn}>
            <div className={styles.heading}>Image Converter</div>
            <div className={styles.footerLinks}>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>PDF to JPG</div>
              </Link>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>JPG to PDF</div>
              </Link>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>HEIC to JPG</div>
              </Link>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>Image to PDF</div>
              </Link>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>Image Converter</div>
              </Link>
            </div>
          </div>
          <div className={styles.footerLinksColumn}>
            <div className={styles.heading}>Audio Converter</div>
            <div className={styles.footerLinks}>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>MP4 to MP3</div>
              </Link>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>Video to MP3</div>
              </Link>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>Audio Converter</div>
              </Link>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>MP3 Converter</div>
              </Link>
            </div>
          </div>
          <div className={styles.footerLinksColumn}>
            <div className={styles.heading}>Video Converter</div>
            <div className={styles.footerLinks}>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>Video to GIF</div>
              </Link>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>Video Converter</div>
              </Link>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>MOV to MP4</div>
              </Link>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>MP4 Converter</div>
              </Link>
            </div>
          </div>
          <div className={styles.footerLinksColumn}>
            <div className={styles.heading}>{`Document & Ebook Converter`}</div>
            <div className={styles.footerLinks}>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>PDf to WORD</div>
              </Link>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>UPUB to MOBI</div>
              </Link>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>EPUB to PDF</div>
              </Link>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>Document Converter</div>
              </Link>
              <Link className={styles.buttonBase} to="/add-more-files">
                <div className={styles.text}>Ebook Converter</div>
              </Link>
            </div>
          </div>
          <div className={styles.footerLinksColumn4}>
            <div className={styles.footerLinks4}>
              <div className={styles.buttonBase18}>
                <div className={styles.text}>Terms</div>
              </div>
              <div className={styles.buttonBase18}>
                <div className={styles.text}>Privacy</div>
              </div>
              <div className={styles.buttonBase18}>
                <div className={styles.text}>Sitemap</div>
              </div>
              <div className={styles.buttonBase18}>
                <div className={styles.text}>FAQs</div>
              </div>
              <div className={styles.buttonBase18}>
                <div className={styles.text}>About Us</div>
              </div>
              <div className={styles.buttonBase18}>
                <div className={styles.text}>Contact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container1}>
        <div className={styles.divider} />
        <div className={styles.content1}>
          <div className={styles.logoWrap}>
            <div className={styles.logomark}>
              <img className={styles.contentIcon} alt="" src="/content.svg" />
            </div>
            <b className={styles.anyConvertercom}>Any-Converter.com</b>
          </div>
          <div className={styles.footerText}>
            © 2025 Any-Converter.com. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
