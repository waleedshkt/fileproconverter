import React, { memo, useCallback, useMemo } from "react";
import { Button, Upload } from "antd";
import { FileSyncOutlined, PlusOutlined } from "@ant-design/icons";
import FileRow from "../FileRow";
import * as styles from "./index.module.css";

import formatsSerials from "../../data/formats-serials.json";

const AddMoreFiles = ({ from, to, files, beginUpload, handleDeleteFile, handleUpload, beforeUpload }) => {
  
  const selectedSerial = useMemo(() => {
    let f = `${from}-${to}`;

    return formatsSerials[f];
  }, [from, to, formatsSerials]);

  const renderFileRows = useCallback(() => files.map((file, i) => (
    <FileRow 
      key={i}
      file={file}
      start={beginUpload}
      serial={selectedSerial}
      handleDelete={handleDeleteFile(i)}
    />
  )), [files, selectedSerial, handleDeleteFile]);

  return (
    <div className={styles.addMoreFiles}>
      <div className={styles.frameParent}>
        {!beginUpload && (
          <div className={styles.buttonBaseParent}>
            <Upload
              showUploadList={false}
              beforeUpload={beforeUpload}
              fileList={files}
            >
              <Button
                className={styles.buttonBase}
                type="default"
                icon={<PlusOutlined />}
              >
                Add more
              </Button>
            </Upload>
          </div>
        )}
        <div className={styles.fileAdded}>{files.length} file{files.length > 1 ? "s" : ""} added</div>
      </div>
      <div className={styles.frameGroup}>
        {renderFileRows()}
      </div>
      {!beginUpload && (
        <div className={styles.buttonBaseWrapper}>
          <Button 
            onClick={handleUpload}
            className={styles.buttonBase2} 
            type="primary"
            icon={<FileSyncOutlined />}
          >
            Convert
          </Button>
        </div>
      )}
    </div>
  );
};

export default memo(AddMoreFiles);
