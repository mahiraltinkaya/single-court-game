import React from "react";

interface IProps {
  cb?: (entity: object) => void;
  style?: any;
  name?: string;
  entity?: any;
}

const Ball: React.FC<IProps> = ({ cb = () => {}, entity }) => {
  return (
    <div
      style={{
        ...entity.style,
      }}
      onClick={() => {
        cb({
          ...entity,
          start: true,
          left: Math.random() <= 0.5 ? true : false,
          top: Math.random() <= 0.5 ? true : false,
        });
      }}
    ></div>
  );
};

export default Ball;
