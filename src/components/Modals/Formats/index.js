import * as React from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import PropTypes from "prop-types";
import * as styles from "./dropdown-formats.module.css";

const DropdownFormats = ({ className = "", onClose }) => {
  return (
    <div className={[styles.dropdownFormats, className].join(" ")}>
      <div className={styles.buttonBaseParent}>
        <Button className={styles.buttonBase} type="primary">
          Archive
        </Button>
        <Button className={styles.buttonBase} type="text">
          Audio
        </Button>
        <Button className={styles.buttonBase} type="text">
          CAD
        </Button>
        <Button className={styles.buttonBase} type="text">
          Document
        </Button>
        <Button className={styles.buttonBase} type="text">
          Ebook
        </Button>
        <Button className={styles.buttonBase} type="text">
          Image
        </Button>
        <Button className={styles.buttonBase} type="text">
          Presentation
        </Button>
        <Button className={styles.buttonBase} type="text">
          Spreadsheet
        </Button>
        <Button className={styles.buttonBase} type="text">
          Vector
        </Button>
        <Button className={styles.buttonBase} type="text">
          VIdeo
        </Button>
      </div>
      <div className={styles.buttonBaseGroup}>
        <Button type="text">7Z</Button>
        <Button type="primary">TAR.BZ2</Button>
        <Button type="text">TAR.GZ</Button>
        <Button type="text">TAR.GZ</Button>
      </div>
    </div>
  );
};

DropdownFormats.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default DropdownFormats;
