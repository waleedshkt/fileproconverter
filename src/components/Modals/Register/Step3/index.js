import * as React from "react";
import "antd/dist/antd.min.css";
import { Input, Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import * as styles from "./modal-subscribe1.module.css";

const ModalSubscribe1 = ({ className = "", onClose }) => {
  return (
    <div className={[styles.modalSubscribe3, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.step3Of}>Step 3 of 3</div>
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
                className={styles.input}
                placeholder="61, Gulshan Block, Allama Iqbal Tow"
                bordered={true}
              />
            </div>
            <div className={styles.inputWithLabel1}>
              <div className={styles.label}>Post code</div>
              <Input
                className={styles.input}
                placeholder="2024"
                bordered={true}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputWithLabel2}>
              <div className={styles.label}>Country</div>
              <Dropdown
                className={styles.input2}
                overlay={
                  <Menu>
                    {[].map((option, index) => (
                      <Menu.Item key={index}>
                        <a onClick={(e) => e.preventDefault()}>
                          {option.value || ""}
                        </a>
                      </Menu.Item>
                    ))}
                  </Menu>
                }
                trigger={["hover"]}
              >
                <Button onClick={(e) => e.preventDefault()}>
                  {`Select  `}
                  <DownOutlined />
                </Button>
              </Dropdown>
            </div>
            <div className={styles.inputWithLabel3}>
              <div className={styles.label}>City</div>
              <Input className={styles.input} bordered={true} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.modalActions}>
        <Button className={styles.buttonBase} type="default">
          Cancel
        </Button>
        <Button className={styles.buttonBase} type="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

ModalSubscribe1.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default ModalSubscribe1;
