import React, { Children, useEffect, useMemo, useState } from "react";
import { useGameLoop } from "../../hooks/useGameLoop";

interface IProps {
  entities: any[];
  system: any[];
  start: boolean;
  style?: any;
  children?: any;
}

const Game: React.FC<IProps> = ({ entities, system, start = false }) => {
  const [variables, setVariables] = useState(entities);
  const [run] = useState(start);

  useGameLoop((timer: number, action: any, newEntities: object[]) => {
    system.forEach((cb) => {
      const data = cb(newEntities, { timer, start: run }, action);
      setVariables(data);
    });
  }, variables);

  const envList = useMemo(() => {
    return variables;
  }, [variables]);

  const handleUpdate = (entity: any) => {
    const index = variables.findIndex((item) => item.name === entity.name);
    if (index !== -1) {
      setVariables((prev) => {
        prev[index] = entity;
        return [...prev];
      });
    }
  };

  return (
    <div>
      {envList.map((entity) => {
        return React.cloneElement(entity.component, {
          key: entity.name,
          cb: handleUpdate,
          name: entity.name,
          style: entity.style,
          entity: entity,
        });
      })}
    </div>
  );
};

const GameBoard: React.FC<IProps> = ({
  entities,
  start,
  system,
  style,
  children,
}) => {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {start && <Game entities={entities} start={start} system={system}></Game>}

      {children}
    </div>
  );
};

export default GameBoard;
