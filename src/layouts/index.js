import React from "react";
import useIsClient from "../hooks/useIsClient";
  
  const Layout = ({ children }) => {
    const { isClient, key } = useIsClient();
    if(!isClient) return null;
    return <div key={key}>{children}</div>;
  };
  
  export default Layout;