import React, { memo, useMemo, useCallback, useEffect } from "react";
import { useHookstate as useState } from "@hookstate/core";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { Button, Progress, Tag, Spin } from "antd";
import { DeleteOutlined, LoadingOutlined } from "@ant-design/icons";
import * as styles from "./index.module.css";

import { truncateString } from "../../helpers";

const FileRow = ({ file, to, serial, start, handleDelete }) => {
  const status = useState("To upload");
  const uploadProgress = useState(0);
  const uid = useState("");

  const fileSize = useMemo(() => {
    let s = file.size / 1024 / 1024;
    if(s > 1000) {
        s = s / 1024;
        s = (s).toFixed(2) + "GB"
    }else {
        s = (s).toFixed(2) + "MB";
    }   

    return s;

  }, [file.size]);

  const statusColor = useCallback(() => {
      switch(status?.get()) {
          case "To upload":
              return "purple";
          case "Uploading":
              return "blue";
          case "Converting" | "Downloading":
              return "cyan";
          case "Done":
              return "green";
          case "Error":
              return "red";
          default: 
              return "magenta";
      }
  }, [status?.get()]);

  const handleDownload = useCallback(() => {

      axios({
        url: `http://3.82.165.29:5000/download?dir=${uid?.get()}`,
        method: "GET",
        responseType: "blob"
      })
        .then(res => {
          //console.log(res.data);
          const href = URL.createObjectURL(res.data);
          //console.log(href);
          
          const link = document.createElement("a");
          link.href = href;
          link.setAttribute("download", `output.${to.toLowerCase()}`);
          document.body.appendChild(link);
          link.click();

          document.body.removeChild(link);
          URL.revokeObjectURL(href);
        })
        .catch(er => console.log(er));

  }, [uid?.get(), to]);

  const initializeConversion = useCallback(() => {

      let uid_ = uuid();

      const formData = new FormData();
      formData.append("files", file, file.name);
      formData.append("config", JSON.stringify({ id: serial, dir: uid_ }));

      const request = new XMLHttpRequest();

      request.addEventListener("load", loadHandler, false);
      request.addEventListener("error", errorHandler, false);

      console.log(process.env.GATSBY_SERVER_URL);

      request.open("POST", "http://3.82.165.29:5000/", true);

      request.upload.onprogress = function(e) {
        if(e.lengthComputable) {
          let p = (e.loaded / e.total * 100).toFixed(2);
          //console.log(p);
          uploadProgress.set(p);

          if(p === 100) {
              status.set("Converting");
          }
        }
      };

      request.send(formData);

      status.set("Uploading");

      setTimeout(() => {
          uid.set(uid_);
      }, 0);

      function loadHandler(event) {
          //console.log(event.target.responseText);
          status.set("Done");
      }

      function errorHandler(event) {
          status.set("Error");
      }

  }, [serial, file]);

  useEffect(() => {
      if(start) {
          initializeConversion();
      }
  }, [start]);

  return (
    <div style={{ alignSelf: "stretch" }}>
      <div className={styles.frameParent}>
        <div className={styles.filenamejpgParent}>
          <div className={styles.filenamejpg}>{truncateString(file.name, 10)}</div>
          <div className={styles.mb}>{fileSize}</div>
        </div>
        <div className={styles.badgeParent}>
          {["Uploading", "Converting"].includes(status?.get()) && <Spin size="small" indicator={<LoadingOutlined spin />} /> } 
          <Tag color={statusColor()}>{status?.get()}</Tag>
          <div className={styles.nutParent}>
            {status?.get() === "To upload" && (
              <Button
                className={styles.nut}
                style={{ width: "24px" }}
                type="text"
                icon={<DeleteOutlined style={{ fontSize: "16px" }} />}
                onClick={handleDelete}
              />
            )}
            {status?.get() === "Done" && (
              <Button
                className={styles.nut}
                type="default"
                onClick={handleDownload}
              >
                Download
              </Button>
            )}
          </div>
        </div>
      </div>
      {status?.get() === "Uploading" && <Progress percent={uploadProgress?.get()} className={styles.progressBar} />}
    </div>
  );
};

export default memo(FileRow);
