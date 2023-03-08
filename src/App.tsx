import React from "react";

import GameBoard from "./components/GameBoard";
import GameLayout from "./components/GameLayout";
import useWindowDimensions from "./hooks/useWindowDimensions";

import Bar from "./components/Bar";
import Ball from "./components/Ball";
import ControlPanel from "./components/ControlPanel";
import Joystick from "./components/Joystick";

import "./App.css";

import { Operations } from "./systems/System";

const App = () => {
  const { width, height } = useWindowDimensions();

  const [start, setStart] = React.useState(false);
  return (
    <div className="App">
      <GameBoard
        start={start}
        entities={[
          {
            key: "Layout",
            name: "Layout",
            pause: false,
            boxes: [],
            point: 0,
            over: false,
            dimensions: {
              width: width && width > 600 ? 600 : width,
              height: height,
            },
            style: {
              position: "absolute",
              left: 0,
              top: 0,
              opacity: 1,
              width: "100%",
            },
            component: <GameLayout></GameLayout>,
          },
          {
            key: "Bar1",
            name: "Bar1",
            pause: false,
            dimensions: {
              width: width && width > 600 ? 600 : width,
              height: height,
            },
            style: {
              opacity: 1,
              position: "absolute",
              width: 120,
              height: 10,
              borderRadius: 3,
              left: width && width > 600 ? 600 / 2 - 60 : width / 2 - 60,
              top: height && height - 90,
              backgroundColor: "red",
              color: "white",
              zIndex: 100,
              padding: 2,
              transition: "left .3s linear",
            },
            component: <Bar></Bar>,
          },
          // {
          //   key: "Bar2",
          //   name: "Bar2",
          //   pause: false,
          //   dimensions: {
          //     width: width && width > 600 ? 600 : width,
          //     height: height,
          //   },
          //   style: {
          //     opacity: 1,
          //     position: "absolute",
          //     width: 120,
          //     height: 30,
          //     borderRadius: 3,
          //     left: width && width > 600 ? 600 / 2 - 60 : width || 600 / 2 - 60,
          //     top: 90,
          //     backgroundColor: "orange",
          //     zIndex: 100,
          //     transition: "all 1s ease",
          //   },
          //   component: <Bar></Bar>,
          // },
          {
            key: "Ball",
            name: "Ball",
            pause: false,
            start: false,
            left: false,
            top: false,
            speed: 2,
            dimensions: {
              width: width && width > 600 ? 600 : width,
              height: height,
            },
            style: {
              opacity: 1,
              position: "absolute",
              width: 20,
              height: 20,
              borderRadius: 50,
              left: width && width > 600 ? 600 / 2 - 10 : width / 2 - 10,
              top: height && height / 2,
              backgroundColor: "red",
              zIndex: 100,
              cursor: "pointer",
            },
            component: <Ball></Ball>,
          },
          {
            key: "Joystick",
            name: "Joystick",
            pause: false,
            start: false,
            left: false,
            top: false,
            speed: 2,
            direction: null,
            dimensions: {
              width: width && width > 600 ? 600 : width,
              height: height,
            },
            style: {
              opacity: 1,
              position: "absolute",
              width: 20,
              height: 20,
              bottom: 40,
              backgroundColor: "red",
              zIndex: 100,
            },
            component: <Joystick></Joystick>,
          },
        ]}
        system={[Operations]}
        style={{
          width: width && width > 600 ? 600 : width,
          height: height,
          backgroundColor: "#f2f2f2a2",
        }}
      >
        <ControlPanel
          onStart={() => {
            setStart(true);
          }}
          onReset={(e) => {
            setStart(e);
          }}
          start={start}
        ></ControlPanel>
      </GameBoard>
    </div>
  );
};

export default App;
