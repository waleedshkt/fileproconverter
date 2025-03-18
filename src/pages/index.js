import React, { useCallback } from "react";
import { useHookstate as useState } from "@hookstate/core";
import { navigate } from "gatsby";
import { Button, Divider, Upload } from "antd";
import { FileOutlined } from "@ant-design/icons";
import Header from "../components/Header";
import USPSection from "../components/UspSection";
import AddMoreSection from "../components/AddMoreFilesSection";
import HowToConvert from "../components/HowToConvertSection";
import Conversions from "../components/Conversions";
import FormatsOverview from "../components/FormatsOverview";
import Footer from "../components/Footer";
import * as styles from "./index.module.css";

import HeroInputDot from "../images/svg/dot.svg";
import HeroInputChevronDown from "../images/svg/chevronDown.svg";

import { selection, misc } from "../globalStates";

import lazyLoad from "../helpers/lazyLoad";
const FormatsModal = lazyLoad("Modals/Formats");

const Page = ({ data }) => {
  const selection_ = useState(selection); //global
  const misc_ = useState(misc); //global
  const beginUpload = useState(false);
  const formatsModal = useState({ open: false, isFrom: true });

  const toggleFormatsModal = useCallback((open, isFrom = true) => () => formatsModal.set({ open, isFrom }), []);

  const handleFormatSelect = useCallback((format, isFrom) => () => {
    let from, to;

    selection_.set(p => {
      if(isFrom) {
        from = format;
        to = p.to;
      }else {
        from = p.format;
        to = format;
      }

      return { ...p, [isFrom ? "from" : "to"]: format };
    });

    from = from ? from.substr(0).replaceAll(".", "") : from;
    to = to ? to.substr(0).replaceAll(".", "") : to;

    if(from && to) {
      navigate(`/convert/${from.toLowerCase()}-to-${to.toLowerCase()}`);
    }else {
      navigate(`/${from?.toLowerCase() || to?.toLowerCase()}-converter`);
    }
  }, []);

  const beforeUpload = useCallback((file) => {
      let fileFormat = file.name?.split(".");
      fileFormat.shift();
      fileFormat = fileFormat.join(".").toUpperCase(); // for cases such as .TAR.GZ 

      if(!formats.includes(fileFormat)) { // here formats array prop comes from top 'data' page prop
        
        // not yet supported format
        content = formats.length > 1 ? "Sorry. This format is not yet supported." : "Sorry. The file format is invalid."

        misc_.message.set({ type: "error", content });
        return false;
      }


      let fileSize = file.size / 1024 / 1024 / 1024;
      if(fileSize > 1) { // GB
        // above size limit
        messageApi.open({ type: "error", content: "1GB size limit exceeded" });
        return false;
      }

      selection_.set(p => {
        return { ...p, files: p.files.concat([file]), from: fileFormat };
      });

      selection_.files.merge([file]);
      return false;

  }, []);

  const handleUpload = useCallback(() => beginUpload?.set(true), []);

  const handleDeleteFile = useCallback((index) => () => {
    selection_.files?.set(p => {
      let newList = p.slice();
      newList.splice(index, 1);

      return newList;
    });
  }, []);

  return (
    <>
      <div className={styles.page}>
        <Header />
        <main className={styles.body}>
          <div className={styles.main}>
            <div className={styles.adWrapper}>
              <div className={styles.ad} />
            </div>
            <section className={styles.content}>
              <div className={styles.content1}>
                <div className={styles.heroSection}>
                  <div className={styles.fileConverterParent}>
                    <div className={styles.fileConverter}>File Converter</div>
                    <div className={styles.securelyConvertFiles}>
                      Securely convert files online from one format to another
                    </div>
                  </div>
                  <div className={styles.inputParent}>
                    <div className={styles.input} onClick={toggleFormatsModal(true, true)}>
                      <div className={styles.content2}>
                        <HeroInputDot className={styles.dotIcon} />
                        <div className={styles.text}>{selection_?.from?.get() || "From"}</div>
                      </div>
                      <HeroInputChevronDown className={styles.chevronDownIcon} />
                    </div>
                    <div className={styles.input} onClick={toggleFormatsModal(true, false)}>
                      <div className={styles.content2}>
                        <HeroInputDot className={styles.dotIcon} />
                        <div className={styles.text}>{selection_?.to?.get() || "To"}</div>
                      </div>
                      <HeroInputChevronDown className={styles.chevronDownIcon} />
                    </div>
                  </div>
                </div>
                <div className={styles.ad1} />
                {selection_?.files?.length ? (
                  <AddMoreSection 
                    from={selection_?.from?.get()}
                    to={selection_?.to?.get()}
                    beginUpload={beginUpload?.get()}
                    files={selection_?.files?.get()}
                    handleUpload={handleUpload}
                    handleDeleteFile={handleDeleteFile}
                    beforeUpload={beforeUpload}
                  />
                ) : (
                  <div className={styles.uploadSection}>
                    <Upload
                      showUploadList={false}
                      beforeUpload={beforeUpload}
                      fileList={[...selection_.files.get()]}
                    >
                      <Button 
                        icon={<FileOutlined />}
                        className={[styles.mainButton, styles.buttonBase]} 
                        type="primary"
                      >
                        Select Files  
                      </Button>
                    </Upload>
                    {/* <div className={styles.maxFileSize}>Max File Size: 2GB</div> */}
                  </div>
                )}
                <div className={styles.ad2} />
                <USPSection />
              </div>
              <HowToConvert 
                from={selection_.from?.get()} 
                to={selection_.to?.get()} 
              />
              <Conversions 
                heading={""}
                linksArr={[]}
              />
              <Divider className={styles.divider} />
              <FormatsOverview 
                fromToArr={[selection_?.from?.get(), selection_?.to?.get()]}
                info={{}}
              />
              <div className={styles.ad3} />
            </section>
            <div className={styles.adWrapper}>
              <div className={styles.ad4} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
      {formatsModal?.open?.get() && (
        <FormatsModal 
          open={formatsModal?.open?.get()}
          onClose={toggleFormatsModal(false)}
          isFrom={formatsModal?.isFrom?.get()}
          from={selection_?.from?.get()}
          to={selection_?.to?.get()}
          handleFormatSelect={handleFormatSelect}
        />
      )}
    </>
  );
};

export default Page;
