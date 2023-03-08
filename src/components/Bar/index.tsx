import React from "react";

interface IProps {
  cb?: (entity: object) => void;
  style?: any;
  name?: string;
  entity?: any;
}

const Bar: React.FC<IProps> = ({ style, cb = () => {}, entity }) => {
  return (
    <div
      style={{
        ...style,
      }}
      onClick={() => {
        // cb({ ...entity, style: { ...entity.style, width: 100 } });
      }}
    ></div>
  );
};

export default Bar;
