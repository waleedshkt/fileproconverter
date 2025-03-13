import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
    //disable react dev tools
    const snippet = `"object"==typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__&&(__REACT_DEVTOOLS_GLOBAL_HOOK__.inject=function(){})`;
  
    setHeadComponents(process.env.NODE_ENV === "production" ? [<script dangerouslySetInnerHTML={{ __html: snippet }} />] : []);
};