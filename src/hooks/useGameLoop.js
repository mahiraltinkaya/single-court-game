import { useRef, useEffect } from "react";

export const useGameLoop = (callback, entities) => {
  const eventRequest = useRef();
  const requestID = useRef();
  const eventListener = useRef();
  const entitiyList = useRef(entities);

  const loop = (time, event) => {
    callback(
      time,
      event
        ? {
            key: event?.key,
            code: event?.code,
            keyCode: event?.keyCode,
          }
        : null,
      entitiyList.current
    );
    eventRequest.current = null;
    requestID.current = requestAnimationFrame((e) => {
      loop(e, eventRequest.current);
    });
  };

  useEffect(() => {
    requestID.current = requestAnimationFrame((e) => {
      loop(e, eventRequest.current);
    });
    eventListener.current = document.addEventListener("keydown", (event) => {
      eventRequest.current = event;
    });

    return () => {
      cancelAnimationFrame(requestID.current);
      removeEventListener("keydown", eventListener.current);
    };
  }, []);

  useEffect(() => {
    entitiyList.current = entities;
  }, [entities]);
};
