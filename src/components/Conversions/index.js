import * as React from "react";
import { memo } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import * as styles from "./conversions.module.css";

const Conversions = memo(({ className = "" }) => {
  return (
    <div className={[styles.popularConversions, className].join(" ")}>
      <div className={styles.popularConversions1}>Popular Conversions</div>
      <div className={styles.pdfToJpgParent}>
        <Link className={styles.pdfToJpg} to="/add-more-files">
          PDF to JPG
        </Link>
        <b className={styles.pdfToJpg1}>PDF to JPG</b>
        <b className={styles.pdfToJpg1}>PDF to JPG</b>
        <b className={styles.pdfToJpg1}>PDF to JPG</b>
        <b className={styles.pdfToJpg1}>PDF to JPG</b>
        <b className={styles.pdfToJpg1}>PDF to JPG</b>
        <b className={styles.pdfToJpg1}>PDF to JPG</b>
        <b className={styles.pdfToJpg1}>PDF to JPG</b>
        <b className={styles.pdfToJpg1}>PDF to JPG</b>
      </div>
    </div>
  );
});

Conversions.propTypes = {
  className: PropTypes.string,
};

export default Conversions;
