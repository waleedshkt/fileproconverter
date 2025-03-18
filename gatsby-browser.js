import "./styles/global.css";
    
import React from "react";
import Loader from "./src/components/Loader";
import Message from "./src/components/Message";
import { ConfigProvider } from "antd";

export const wrapRootElement = withAuthProvider(({ element }) => {
    
    return (
        <>
            <ConfigProvider 
                theme={{}}
            >
                {element}
                <Loader />
                <Message />
            </ConfigProvider>    
        </>
    );
});