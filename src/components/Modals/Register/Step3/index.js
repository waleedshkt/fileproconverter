/* import React, { memo, useCallback, useMemo } from "react";
import { Input, Select } from "antd";
import * as styles from "./index.module.css";

import { getNames as getCountries } from "country-list";

const RegisterStep3 = ({ touched, errors, values, handleChange, handleBlur, setFieldValue }) => {

  const countryNames = useMemo(() => getCountries().map((c, i) => ({ "label": c, "value": c })), [getCountries]);
  
  const onCountrySelectChange = useCallback((value) => setFieldValue("country", value, true), [setFieldValue]);

  const onCountrySelectSearch = useCallback((value) => setFieldValue("country", value, true), [setFieldValue]);
  
  return (
      <>
        <div className={styles.textAndSupportingText}>
          <div className={styles.text}>Billing Address</div>
          <div className={styles.supportingText}>
            Enter your current billing address
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.row}>
            <div className={styles.inputWithLabel}>
              <div className={styles.label}>Street address</div>
              <Input
                name="streetAddress"
                placeholder="Enter here"
                value={values.streetAddress}
                onChange={handleChange}
                onBlur={handleBlur}
                className={styles.input}
              />
              {(!!errors.streetAddress && touched.streetAddress) && <span style={{ fontSize: "12px", color: "red" }}>{errors.streetAddress}</span>}
            </div>
            <div className={styles.inputWithLabel1}>
              <div className={styles.label}>Post code</div>
              <Input
                name="postCode"
                value={values.postCode}
                onChange={handleChange}
                onBlur={handleBlur}
                className={styles.input}
                placeholder="Enter here"
              />
              {(!!errors.postCode && touched.postCode) && <span style={{ fontSize: "12px", color: "red" }}>{errors.postCode}</span>}
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputWithLabel2}>
              <div className={styles.label}>Country</div>
              <Select 
                value={values.country}
                showSearch
                placeholder="Select country"
                optionFilterProp="label"
                onChange={onCountrySelectChange}
                onSearch={onCountrySelectSearch}
                options={countryNames}
              />
              {(!!errors.country && touched.country) && <span style={{ fontSize: "12px", color: "red" }}>{errors.country}</span>}
            </div>
            <div className={styles.inputWithLabel3}>
              <div className={styles.label}>City</div>
              <Input
                name="city"
                placeholder="Enter here"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                className={styles.input}
              />
              {(!!errors.city && touched.city) && <span style={{ fontSize: "12px", color: "red" }}>{errors.city}</span>}
            </div>
          </div>
        </div>
      </>
  );
};

export default memo(RegisterStep3);
 */