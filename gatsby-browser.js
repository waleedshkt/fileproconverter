import "./styles/global.css";
    
import React from "react";
import { Script } from "gatsby";
import Loader from "./src/components/Loader";
import Message from "./src/components/Message";
import { ConfigProvider } from "antd";
import { AuthProvider } from "./src/helpers/auth/firebase/user";
import useAuth from "./src/hooks/useAuth";

const withAuthProvider = Component => props => (
    <AuthProvider>
        <Component {...props} />
    </AuthProvider>
);

export const wrapRootElement = withAuthProvider(({ element }) => {
    const initialLoad = useAuth();

    return (
        <>
            <ConfigProvider 
                theme={{}}
            >
                {element}
                <Loader />
                <Message />
            </ConfigProvider>    
            <Script src="https://www.2checkout.com/checkout/api/2co.min.js" strategy="idle" />
        </>
    );
});