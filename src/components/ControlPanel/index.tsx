import { RightCircleOutlined, StopOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";

interface IProps {
  onStart: () => void;
  onReset: (val: boolean) => void;
  start: boolean;
}

const ControlPanel: React.FC<IProps> = ({ onStart, onReset, start }) => {
  return (
    <div
      style={{
        position: "absolute",
        right: 20,
        bottom: 20,
        width: "50px",
        backgroundColor: "#d9d9d9",
        borderRadius: 10,
        padding: "5px 0px",
        zIndex: 999,
      }}
    >
      <Space wrap>
        {!start && (
          <Button
            icon={<RightCircleOutlined />}
            onClick={() => {
              onStart();
            }}
            shape={"circle"}
          ></Button>
        )}

        {start && (
          <Button
            icon={<StopOutlined />}
            onClick={() => {
              onReset(false);
            }}
            shape={"circle"}
          ></Button>
        )}
      </Space>
    </div>
  );
};

export default ControlPanel;
