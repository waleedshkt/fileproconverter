import React, { memo, useCallback, useMemo } from "react";
import { useHookstate as useState } from "@hookstate/core";
import { Button, Tabs } from "antd";
import * as styles from "./index.module.css";

// fromToArr -> [from, to]
// info -> {[from]: {introduction: "", ...}, [to]: ...}

const FormatsOverview = ({ fromToArr, info }) => {
  const currentTab = useState("1");
  const currentSection = useState("Introduction");

  const handleTabChange = useCallback(key => currentTab?.set(key), []);

  const tabItems = useMemo(() => fromToArr.map(() => ({
    key: (i + 1).toString(),
    label: el,
    children: null
  })), [fromToArr]);

  return (
    <div className={styles.formatsOverview}>
      <div className={styles.formatOverview}>Format Overview</div>
      {fromToArr?.length > 1 && (
        <Tabs 
          defaultActiveKey="1"
          items={tabItems}
          onChange={handleTabChange}
        />
      )}
      <div className={styles.subNavigation}>
        <Button type={currentSection?.get() === "introduction" ? "Primary" : "text"} onClick={handleSectionChange("introduction")}>Introdiction</Button>
        <Button type={currentSection?.get() === "use-cases" ? "Primary" : "text"} onClick={handleSectionChange("use-cases")}>Use Cases</Button>
        <Button type={currentSection?.get() === "how-to-use" ? "Primary" : "text"} onClick={handleSectionChange("how-to-use")}>How to Use</Button>
        <Button type={currentSection?.get() === "benefits" ? "Primary" : "text"} onClick={handleSectionChange("benefits")}>Benefits</Button>
        <Button type={currentSection?.get() === "drawbacks" ? "Primary" : "text"} onClick={handleSectionChange("drawbacks")}>Drawbacks</Button>
      </div>
      <div className={styles.fkjfkjgfdgFgkjfdkgjfdGfdkjgfContainer}>
        <p>
          {info[fromToArr[parseInt(currentTab?.get()) - 1]][currentSection?.get()]}
        </p>
      </div>
    </div>
  );
};

export default memo(FormatsOverview);
