import * as React from "react";
import { memo } from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import PropTypes from "prop-types";
import * as styles from "./formats-overview.module.css";

const FormatsOverview = memo(({ className = "" }) => {
  return (
    <div className={[styles.formatsOverview, className].join(" ")}>
      <div className={styles.subNavigation}>
        <Button type="primary">Introdiction</Button>
        <Button type="text">Use Cases</Button>
        <Button type="text">How to Use</Button>
        <Button type="text">Benefits</Button>
        <Button type="text">Drawbacks</Button>
      </div>
      <div className={styles.formatOverview}>Format Overview</div>
      <div className={styles.tabs}>
        <div className={styles.tabButtonBase}>
          <div className={styles.content}>
            <div className={styles.text}>Format 1</div>
          </div>
          <div className={styles.bottomBorder} />
        </div>
        <div className={styles.tabButtonBase1}>
          <div className={styles.content}>
            <div className={styles.text}>Format 2</div>
          </div>
          <div className={styles.bottomBorder1} />
        </div>
      </div>
      <div className={styles.fkjfkjgfdgFgkjfdkgjfdGfdkjgfContainer}>
        <p className={styles.fkjfkjgfdgFgkjfdkgjfdGfdkjgf}>
          fkjfkjgfdg fgkjfdkgjfd gfdkjgfdg fdgjfdgf dgkfdjgfkd gfdkjgdfgfg
        </p>
        <p className={styles.fkjfkjgfdgFgkjfdkgjfdGfdkjgf}>dfksfkfg</p>
        <p className={styles.fkjfkjgfdgFgkjfdkgjfdGfdkjgf}>fdgjfdkjgfdkjgf</p>
        <p className={styles.gfgkfjkgjfkdgkj}>gfgkfjkgjfkdgkj</p>
      </div>
    </div>
  );
});

FormatsOverview.propTypes = {
  className: PropTypes.string,
};

export default FormatsOverview;
