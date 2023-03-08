import React from "react";

interface IProps {
  style?: any;
  entity?: any;
}

const GameLayout: React.FC<IProps> = ({ style, entity }) => {
  const { width, height } = entity.dimensions;
  return (
    <div
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: width,
        paddingTop: 20,
        height: height,
        justifyContent: "center",
      }}
    >
      {entity.over && (
        <div style={{ fontSize: 128, opacity: 5 }}>Game Over</div>
      )}
      <div style={{ fontSize: 128, opacity: 0.1 }}>{entity.point}</div>
    </div>
  );
};

export default React.memo(GameLayout);
