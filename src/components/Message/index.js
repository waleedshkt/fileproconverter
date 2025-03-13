import React, { memo, useCallback } from "react";
import { useHookstate as useState } from "@hookstate/core";
import { message } from "antd";

import { misc } from "../../globalStates";

const Message = ({  }) => {
    const [ messageApi, contextHolder ] = message.useMessage();

    const { message: _message } = useState(misc); //global

    const showMessage = useCallback(() => {
        messageApi.open({ type: _message?.type?.get(), content: _message?.content.get(), duration: 3 });
    }, [_message]);
    showMessage();

    return (
        <>
            {contextHolder}
        </>
    );
};

export default memo(Message);