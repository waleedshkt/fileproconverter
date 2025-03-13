import * as React from "react";
import { memo } from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import PropTypes from "prop-types";
import * as styles from "./file-row.module.css";

const FileRow = memo(({ className = "" }) => {
  return (
    <li className={[styles.frameParent, className].join(" ")}>
      <div className={styles.filenamejpgParent}>
        <div className={styles.filenamejpg}>Filename.jpg</div>
        <div className={styles.mb}>22.2MB</div>
      </div>
      <div className={styles.badgeParent}>
        <div className={styles.badge}>
          <div className={styles.badgeBase}>
            <div className={styles.text}>To upload</div>
          </div>
        </div>
        <div className={styles.nutParent}>
          <Button
            className={styles.nut}
            style={{ width: "24px" }}
            type="text"
          />
          <Button
            className={styles.nut}
            style={{ width: "24px" }}
            type="text"
          />
        </div>
      </div>
    </li>
  );
});

FileRow.propTypes = {
  className: PropTypes.string,
};

export default FileRow;
