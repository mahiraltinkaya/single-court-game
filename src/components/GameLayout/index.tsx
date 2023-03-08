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
      <div
        style={{ fontSize: 32, opacity: 0.1, position: "absolute", top: 30 }}
      >
        Click to ball for start
      </div>
      <div
        style={{ fontSize: 32, opacity: 0.1, position: "absolute", top: 70 }}
      >
        Controls LeftArrow, RightArrow or A, D
      </div>
      {entity.over && <div style={{ fontSize: 72, opacity: 5 }}>Game Over</div>}
      <div style={{ fontSize: 128, opacity: 0.1 }}>{entity.point}</div>
    </div>
  );
};

export default React.memo(GameLayout);
