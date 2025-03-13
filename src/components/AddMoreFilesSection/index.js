import * as React from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import FileRow from "./file-row";
import PropTypes from "prop-types";
import * as styles from "./add-more-files.module.css";

const AddMoreFiles = ({ className = "" }) => {
  return (
    <div className={[styles.addMoreFiles, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.buttonBaseParent}>
          <Button
            className={styles.buttonBase}
            style={{ width: "139px" }}
            type="default"
          >
            Add more
          </Button>
          <Button
            className={styles.buttonBase1}
            style={{ width: "44px" }}
            type="default"
          />
        </div>
        <div className={styles.fileAdded}>1 file added</div>
      </div>
      <div className={styles.frameGroup}>
        <FileRow />
        <FileRow />
      </div>
      <div className={styles.buttonBaseWrapper}>
        <Button className={styles.buttonBase2} type="primary">
          Convert
        </Button>
      </div>
    </div>
  );
};

AddMoreFiles.propTypes = {
  className: PropTypes.string,
};

export default AddMoreFiles;
