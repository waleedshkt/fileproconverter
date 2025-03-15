import React,{ memo } from "react";
import * as styles from "./index.module.css";

const HowToConvert = ({ from = "", to = "" }) => {
  
  return (
    <div className={styles.howToConvert}>
      <div className={styles.howToConvert1}>How to Convert{(!!from && !!to) ? ` from ${from} to ${to}` : ((!!from && !Boolean(to)) ? ` from ${from}` : ``)}?</div>
      <div className={styles.clickTheSelectContainer}>
        <ol className={styles.clickTheSelectFilesButto}>
          <li className={styles.selectTheFormatYouWantThe}>
            <span className={styles.clickThe}>Click the “</span>
            <span className={styles.selectFiles}>Select Files</span>
            <span className={styles.buttonAndSelect}>
              ” button and select files you want to convert.
            </span>
          </li>
          <li className={styles.selectTheFormatYouWantThe}>
            <span className={styles.buttonAndSelect}>
              Select the format you want the file to convert to by clicking “
            </span>
            <span className={styles.selectFiles}>To</span>
            <span className={styles.clickThe}>” dropdown</span>
          </li>
          <li className={styles.selectTheFormatYouWantThe}>
            <span className={styles.clickThe}>
              Convert the file by clicking on the “
            </span>
            <span className={styles.selectFiles}>Convert</span>
            <span className={styles.clickThe}>” button</span>
          </li>
          <li>
            <span className={styles.clickThe}>
              when the status change to “Done” click the “
            </span>
            <span className={styles.selectFiles}>Download</span>
            <span className={styles.clickThe}>” button</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default memo(HowToConvert);
