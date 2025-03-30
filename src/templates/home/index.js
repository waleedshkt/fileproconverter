import React, { useCallback, useEffect } from "react";
import { useHookstate as useState } from "@hookstate/core";
import { navigate } from "gatsby";
import { Button, Divider, Upload } from "antd";
import { FileOutlined } from "@ant-design/icons";
import SEO from "../../components/SEO";
import Header from "../../components/Header";
import USPSection from "../../components/UspSection";
import AddMoreSection from "../../components/AddMoreFilesSection";
import HowToConvert from "../../components/HowToConvertSection";
// import Conversions from "../../components/Conversions";
// import FormatsOverview from "../../components/FormatsOverview";
import Footer from "../../components/Footer";
import * as styles from "./index.module.css";

import HeroInputDot from "../../images/svg/dot.svg";
import HeroInputChevronDown from "../../images/svg/chevronDown.svg";

import { selection, misc } from "../../globalStates";

import lazyLoad from "../../helpers/lazyLoad";
const FormatsModal = lazyLoad("Modals/Formats");

const Page = ({ pageContext }) => {
  const { data } = pageContext;

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
        from = p.from;
        to = format;
      }

      return { ...p, [isFrom ? "from" : "to"]: format };
    });

    from = from ? from.substr(0).replaceAll(".", "") : from;
    to = to ? to.substr(0).replaceAll(".", "") : to;

    console.log(from, to);

    if(from && to) {
      navigate(`/${from.toLowerCase()}-to-${to.toLowerCase()}`);
    }else if(from && !Boolean(to)) {
      navigate(`/${from?.toLowerCase()}-converter`);
    }

    toggleFormatsModal(false)();
  }, [data.type]);

  const beforeUpload = useCallback((file) => {
      let fileFormat = file.name?.split(".");
      fileFormat.shift();
      fileFormat = fileFormat.join(".").toLowerCase(); // for cases such as .TAR.GZ 
      fileFormat = "." + fileFormat;

      console.log(data.formatExtensions, fileFormat);

      if(!data.formatExtensions.includes(fileFormat)) { // here formats array prop comes from top 'data' page prop
        
        // not yet supported format
        let content = (data.type !== "both" && data.formatExtensions.length > 1) ? "Sorry. This format is not yet supported." : "Sorry. The file format is invalid."

        misc_.message.set({ type: "error", content });
        return false;
      }


      let fileSize = file.size / 1024 / 1024 / 1024;
      if(fileSize > 1) { // GB
        // above size limit
        misc_.message.set({ type: "error", content: "1GB size limit exceeded" });
        return false;
      }

      let newFrom = true,
          from_;

      selection_.set(p => {

        newFrom = true;
        if(!!data?.fromTo[0]) {
          newFrom = false;
          from_ = p.from;
        }else {
          from_ = fileFormat;
        }

        return { files: p.files.concat([file]), from: newFrom ? from_.toUpperCase().substr(1, 20) : from_, to: newFrom ? "" : p.to };
      });

      if(from_ === fileFormat) {
        from_.shift();
      }

      newFrom && navigate(`/${from_}-converter`);

      return false;

  }, [data?.formatExtensions, data?.fromTo]);

  const addMoreBeforeUpload = useCallback((file) => {
      let fileFormat = file.name?.split(".");
      fileFormat.shift();
      fileFormat = fileFormat.join(".").toLowerCase(); // for cases such as .TAR.GZ 
      fileFormat = "." + fileFormat;

      console.log(data.formatExtensions, fileFormat);

      if(!data.formatExtensions.includes(fileFormat)) { // here formats array prop comes from top 'data' page prop
        
        // not yet supported format
        let content = (data.type !== "both" && data.formatExtensions.length > 1) ? "Sorry. This format is not yet supported." : "Sorry. The file format is invalid."

        misc_.message.set({ type: "error", content });
        return false;
      }


      let fileSize = file.size / 1024 / 1024 / 1024;
      if(fileSize > 1) { // GB
        // above size limit
        misc_.message.set({ type: "error", content: "1GB size limit exceeded" });
        return false;
      }

      selection_.files.merge([file]);

      return false;
  }, [data.formatExtensions, data.fromTo]);

  const handleUpload = useCallback(() => beginUpload?.set(true), []);

  const handleDeleteFile = useCallback((index) => () => {
    selection_.files?.set(p => {
      let newList = p.slice();
      newList.splice(index, 1);

      return newList;
    });
  }, []);

  useEffect(() => {
    selection_.set(p => {
      return {...p, from: data?.fromTo[0] || "", to: data?.fromTo[1] || ""};
    });
  }, [data?.fromTo]);

  return (
    <>
      <div className={styles.page}>
        <Header />
        <main className={styles.body}>
          <div className={styles.main}>
            <div className={styles.adWrapper}>
              <div className={styles.ad}>
                <iframe src="//www.highperformanceformat.com/watchnew?key=adc7fafb678386945efbc4eaed251170" width="300" height="250" frameborder="0" scrolling="no"></iframe>
              </div>
              <div className={styles.ad_}>
              <iframe src="//www.highperformanceformat.com/watchnew?key=0c054677a2eb743d626385c3f8250930" width="160" height="600" frameborder="0" scrolling="no"></iframe>
              </div>
            </div>
            <section className={styles.content}>
              <div className={styles.content1}>
                <div className={styles.heroSection}>
                  <div className={styles.fileConverterParent}>
                    <div className={styles.fileConverter}>{data.type === "main" ? "File Converter" : (data.type === "both" ? `${data.seo.title} Converter` : data.seo.title)}</div>
                    <div className={styles.securelyConvertFiles}>
                      {data.type === "main" ? "Securely convert files online from one format to another" : "Securely convert online from one format to another"}
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
                <div className={styles.ad1}>
                  <iframe src="//www.highperformanceformat.com/watchnew?key=c01c090071dee2edef17b1115000f485" width="468" height="60" frameborder="0" scrolling="no"></iframe>
                </div>
                <div className={styles.ad1_}>
                   <iframe src="//www.highperformanceformat.com/watchnew?key=dfced92482acef8ef4ba276e470ea779" width="728" height="90" frameborder="0" scrolling="no"></iframe>
                </div>
                <div className={styles.ad1__}>
                  <iframe src="//www.highperformanceformat.com/watchnew?key=e7ed33fd0d9f2bae7ee7bd055d8fc61f" width="320" height="50" frameborder="0" scrolling="no"></iframe>
                </div>
                {selection_?.files?.length ? (
                  <AddMoreSection 
                    from={selection_?.from?.get()}
                    to={selection_?.to?.get()}
                    beginUpload={beginUpload?.get()}
                    files={selection_?.files?.get()}
                    handleUpload={handleUpload}
                    handleDeleteFile={handleDeleteFile}
                    beforeUpload={addMoreBeforeUpload}
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
                <div className={styles.ad2}>
                   <iframe src="//www.highperformanceformat.com/watchnew?key=c01c090071dee2edef17b1115000f485" width="468" height="60" frameborder="0" scrolling="no"></iframe>
                </div>
                <div className={styles.ad2_}>
                    <iframe src="//www.highperformanceformat.com/watchnew?key=dfced92482acef8ef4ba276e470ea779" width="728" height="90" frameborder="0" scrolling="no"></iframe>
                </div>
                <div className={styles.ad2__}>
                   <iframe src="//www.highperformanceformat.com/watchnew?key=adc7fafb678386945efbc4eaed251170" width="300" height="250" frameborder="0" scrolling="no"></iframe>
                </div>
                <USPSection />
              </div>
              <HowToConvert 
                from={selection_.from?.get()} 
                to={selection_.to?.get()} 
              />
              {/* {data?.conversions?.map((o, i) => (
                <Conversions 
                  key={i}
                  heading={o.heading}
                  linksArr={o.linksArray}
                />
              ))} */}
              {/* <Divider className={styles.divider} /> */}
              {/* <FormatsOverview
                info={data?.formatOverview}
              /> */}
              <div className={styles.ad3}>
                  <iframe src="//www.highperformanceformat.com/watchnew?key=adc7fafb678386945efbc4eaed251170" width="300" height="250" frameborder="0" scrolling="no"></iframe>
              </div>
            </section>
            <div className={styles.adWrapper}>
              <div className={styles.ad4}>
                 <iframe src="//www.highperformanceformat.com/watchnew?key=adc7fafb678386945efbc4eaed251170" width="300" height="250" frameborder="0" scrolling="no"></iframe>
              </div>
              <div className={styles.ad4_}>
                 <iframe src="//www.highperformanceformat.com/watchnew?key=0c054677a2eb743d626385c3f8250930" width="160" height="600" frameborder="0" scrolling="no"></iframe>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      {formatsModal?.open?.get() &&
        <FormatsModal 
          open={formatsModal?.open?.get()}
          onClose={toggleFormatsModal(false)}
          isFrom={formatsModal?.isFrom?.get()}
          from={selection_?.from?.get()}
          to={selection_?.to?.get()}
          handleFormatSelect={handleFormatSelect}
        />
      }
    </>
  );
};

export default Page;

export const Head  = ({ location: { pathname }, pageContext }) => {
  const { data: { seo } } = pageContext;

  return (
    <SEO 
      {...seo}
      pathname={pathname}
    />
  );
};