import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

interface IProps {
  cb?: (entity: object) => void;
  style?: any;
  name?: string;
  entity?: any;
}

const Joystick: React.FC<IProps> = ({ cb = () => {}, entity }) => {
  const [direction, setDirection] = React.useState(null);
  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        display: "flex",
        justifyContent: "space-between",
        left: 0,
        right: 0,
        padding: "0px 20px",
      }}
    >
      <Button
        size={"large"}
        shape={"circle"}
        icon={<LeftOutlined />}
        onClick={() => {
          cb({ ...entity, direction: "left" });
        }}
      ></Button>
      <Button
        size={"large"}
        shape={"circle"}
        icon={<RightOutlined />}
        onClick={() => {
          cb({ ...entity, direction: "right" });
        }}
      ></Button>
    </div>
  );
};

export default Joystick;
