import React, { memo, useCallback } from "react";
import { useHookstate as useState } from "@hookstate/core";
import { Modal, Button } from "antd";
import * as styles from "./index.module.css";

import formatsCategories from "../../../data/formats-categories.json";
import formatsFromTo from "../../../data/formats-from-to.json";

const FormatsModal = ({ open, onClose, isFrom, from, to, handleFormatSelect }) => {
  //-------------------------------------------------------------------------
  const getInitialCategory = (isFrom_, from_, to_) => {
    let sel = (isFrom_ ? from_ : to_);
    let cat;

    if(sel) {

      Object.entries(formatsCategories).some(([c, ar], i) => {
        if(ar.includes(sel)) {
          cat = c;
          return true;
        }
      });

      return cat;
    }else {
      return "Archive";
    }
  }; 
  const currentCategory = useState(getInitialCategory(isFrom, from, to));
  //-------------------------------------------------------------------------

  const handleOnHoverCategory = useCallback(category => () => currentCategory?.set(category), []);
  
  const renderCategories = useCallback(() => {
    let cat = [];

    if((!Boolean(from) && !Boolean(to)) || (isFrom && (!!from && !Boolean(to)))) { // when none or only 'from' selected
      cat = Object.keys(formatsCategories);
    }else if(!isFrom && ((!!from && !Boolean(to)) || (!!from && !!to))) { // when open from 'to' and either only 'from' selected or both
      Object.entries(formatsCategories).forEach(([c, fArr], i) => {
        fArr.some((f, j) => {
          if(formatsFromTo[from].from.includes(f)) {
            cat.push(c);
            return true;
          }
        });
      });

    }else if(isFrom && ((!!to && !Boolean(from)) || (!!to && !!from))) { // when open from 'from' and either only 'to' is selected or both
      Object.entries(formatsCategories).forEach(([c, fArr], i) => {
        fArr.some((f, j) => {
          if(formatsFromTo[f].from.includes(to)) {
            cat.push(c);
            return true;
          }
        });
      });
    }
    
    return cat.map((c, i) => (
      <Button 
        key={c}
        className={styles.buttonBase} 
        type={currentCategory?.get() === c ? "primary" : "text"}
        onMouseOver={handleOnHoverCategory(c)}
        onClick={handleOnHoverCategory(c)}
      >
        {c}
      </Button>
    ));

  }, [
    formatsCategories, 
    formatsFromTo,
    currentCategory?.get(), 
    handleOnHoverCategory,
    isFrom,
    from,
    to
  ]);

  const renderFormats = useCallback(() => {
    let arr = [];

    if((!Boolean(from) && !Boolean(to)) || (isFrom && (!!from && !Boolean(to)))) { // when none or only 'from' selected
      arr = formatsCategories[currentCategory?.get()];
    }else if(!isFrom && ((!!from && !Boolean(to)) || (!!from && !!to))) { // when open from 'to' and either only 'from' selected or both
      arr = formatsCategories[currentCategory?.get()].filter((f, i) => formatsFromTo[from].from.includes(f));
    }else if(isFrom && ((!!to && !Boolean(from)) || (!!to && !!from))) { // when open from 'from' and either only 'to' is selected or both
      arr = formatsCategories[currentCategory?.get()].filter((f, i) => formatsFromTo[f].from.includes(to));
    }
    
    return arr.sort().map((f, i) => (
      <Button 
        key={f} 
        type={((isFrom && !!from && from === f) || (!isFrom && !!to && to === f)) ? "primary" : "text"}
        onClick={handleFormatSelect(f, isFrom)}
        className={styles.formatButton}
      >
        {f}
      </Button>
    ));
  }, [
    formatsCategories, 
    formatsFromTo,
    currentCategory?.get(), 
    handleFormatSelect, 
    isFrom, 
    from, 
    to
  ]);

  return (
    <Modal 
      open={open}
      closable
      onClose={onClose}
      onCancel={onClose}
      footer={null}
      className={styles.dropdownFormats}
    ><div style={{ flexDirection: "row", display: "flex", width: "480px" }}>
      <div className={styles.buttonBaseParent}>
        {renderCategories()}
      </div>
      <div className={styles.buttonBaseGroup}>
        {renderFormats()}
      </div>
      </div>
    </Modal>
  );
};

export default memo(FormatsModal);
