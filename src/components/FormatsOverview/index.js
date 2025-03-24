import React, { memo, useCallback, useMemo } from "react";
import { useHookstate as useState } from "@hookstate/core";
import { Tabs } from "antd";
import * as styles from "./index.module.css";

// fromToArr -> [from, to]
// info -> {[from]: {introduction: "", ...}, [to]: ...}

const FormatsOverview = ({ info }) => {
  const currentTab = useState("1");

  const handleTabChange = useCallback(key => currentTab?.set(key), []);

  const tabItems = useMemo(() => (info ? Object.entries(info) : []).map(([el, par], i) => ({
    key: (i + 1).toString(),
    label: el,
    children: par
  })), [info]);

  return (
    <div className={styles.formatsOverview}>
      {!!info && <div className={styles.formatOverview}>Format Overview</div>}
      {!Boolean(info) ? null : (Object.keys(info)?.length > 1 ? (
        <Tabs 
          defaultActiveKey="1"
          items={tabItems}
          onChange={handleTabChange}
        />
      ) : (
        <div className={styles.fkjfkjgfdgFgkjfdkgjfdGfdkjgfContainer}>
          <p className={styles.text}>
            {Object.values(info)[0]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default memo(FormatsOverview);
