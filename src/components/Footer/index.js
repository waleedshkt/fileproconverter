import React, { memo } from "react";
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./index.module.css";

const Footer = ({ }) => (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.footerLinksColumn}>
            <div className={styles.heading}>Image Converter</div>
            <div className={styles.footerLinks}>
              <Link className={styles.buttonBase} to="/convert/pdf-to-jpg">
                <div className={styles.text}>PDF to JPG</div>
              </Link>
              <Link className={styles.buttonBase} to="/convert/jpg-to-pdf">
                <div className={styles.text}>JPG to PDF</div>
              </Link>
              <Link className={styles.buttonBase} to="/convert/heic-to-jpg">
                <div className={styles.text}>HEIC to JPG</div>
              </Link>
              <Link className={styles.buttonBase} to="/convert/image-to-pdf">
                <div className={styles.text}>Image to PDF</div>
              </Link>
              <Link className={styles.buttonBase} to="/image-converter">
                <div className={styles.text}>Image Converter</div>
              </Link>
            </div>
          </div>
          <div className={styles.footerLinksColumn}>
            <div className={styles.heading}>Audio Converter</div>
            <div className={styles.footerLinks}>
              <Link className={styles.buttonBase} to="/convert/mp4-to-mp3">
                <div className={styles.text}>MP4 to MP3</div>
              </Link>
              <Link className={styles.buttonBase} to="/convert/video-to-mp3">
                <div className={styles.text}>Video to MP3</div>
              </Link>
              <Link className={styles.buttonBase} to="/audio-converter">
                <div className={styles.text}>Audio Converter</div>
              </Link>
              <Link className={styles.buttonBase} to="/mp3-converter">
                <div className={styles.text}>MP3 Converter</div>
              </Link>
            </div>
          </div>
          <div className={styles.footerLinksColumn}>
            <div className={styles.heading}>Video Converter</div>
            <div className={styles.footerLinks}>
              <Link className={styles.buttonBase} to="/convert/video-to-gif">
                <div className={styles.text}>Video to GIF</div>
              </Link>
              <Link className={styles.buttonBase} to="/video-converter">
                <div className={styles.text}>Video Converter</div>
              </Link>
              <Link className={styles.buttonBase} to="/convert/mov-to-mp4">
                <div className={styles.text}>MOV to MP4</div>
              </Link>
              <Link className={styles.buttonBase} to="/mp4-converter">
                <div className={styles.text}>MP4 Converter</div>
              </Link>
            </div>
          </div>
          <div className={styles.footerLinksColumn}>
            <div className={styles.heading}>Document & Ebook Converter</div>
            <div className={styles.footerLinks}>
              <Link className={styles.buttonBase} to="/convert/pdf-to-word">
                <div className={styles.text}>PDf to WORD</div>
              </Link>
              <Link className={styles.buttonBase} to="/convert/epub-to-mobi">
                <div className={styles.text}>EPUB to MOBI</div>
              </Link>
              <Link className={styles.buttonBase} to="/convert/epub-to-pdf">
                <div className={styles.text}>EPUB to PDF</div>
              </Link>
              <Link className={styles.buttonBase} to="/document-converter">
                <div className={styles.text}>Document Converter</div>
              </Link>
              <Link className={styles.buttonBase} to="/ebook-converter">
                <div className={styles.text}>Ebook Converter</div>
              </Link>
            </div>
          </div>
          <div className={styles.footerLinksColumn4}>
            <div className={styles.footerLinks4}>
              <Link className={styles.buttonBase18} to="/terms-of-use">
                <div className={styles.text}>Terms</div>
              </Link>
              <Link className={styles.buttonBase18} to="privacy-policy">
                <div className={styles.text}>Privacy</div>
              </Link>
              <Link className={styles.buttonBase18} to="/sitemap">
                <div className={styles.text}>Sitemap</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container1}>
        <div className={styles.divider} />
        <div className={styles.content1}>
          <div className={styles.logoWrap} aria-label="FIleProConverter.com" onClick={() => navigate("/")}>
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
          <div className={styles.footerText}>
            © {new Date().getFullYear()} FileProConverter.com. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
);

export default memo(Footer);
