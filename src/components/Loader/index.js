import React, { memo } from "react";
import { useHookstate as useState } from "@hookstate/core";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { misc } from "../../globalStates";

export const Loader = memo(() => (
    <Spin 
        spinning
        fullscreen
        indicator={
            <LoadingOutlined 
                spin
                style={{ fontSize: '40px', color: "#7e56d9" }}
            />
        }
    />
));

const ControlledLoader = () => {
    const { isLoading } = useState(misc);

    return (
        <Spin 
            spinning={isLoading.get()}
            fullscreen
            style={{ zIndex: 9999 }}
            indicator={
                <LoadingOutlined 
                    spin
                    style={{ fontSize: '40px' }}
                />
            }
        />
    );
};

export default memo(ControlledLoader);