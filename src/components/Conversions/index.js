import React, { memo } from "react";
import { Link } from "gatsby";
import * as styles from "./index.module.css";

// linkArr -> [{ name, link }]
const Conversions = ({ linksArr, heading }) => {
  return (
    <div className={styles.popularConversions}>
      <div className={styles.popularConversions1}>{heading}</div>
      <div className={styles.pdfToJpgParent}>
        {linksArr.map((o, i) => <Link className={i < 1 ? styles.pdfToJpg : styles.pdfToJpg1} to={o.link}>{o.name}</Link>)}
      </div>
    </div>
  );
};

export default memo(Conversions);
