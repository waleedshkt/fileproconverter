import "./styles/global.css";
    
import React from "react";
import Loader from "./src/components/Loader";
import Message from "./src/components/Message";
import { ConfigProvider } from "antd";

export const wrapRootElement = ({ element }) => {
    
    return (
        <>
            <ConfigProvider 
                theme={{
                    components: {
                        Button: {
                            colorPrimary: "#7e56d9",
                            defaultBorderColor: "#7e56d9",
                            defaultColor: "#7e56d9"
                        }
                    }
                }}
            >
                {element}
                <Loader />
                <Message />
            </ConfigProvider>    
        </>
    );
};