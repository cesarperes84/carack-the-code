import React, { useCallback, useEffect, useState } from "react";
import { topRow, bottomRow } from "./constants";
import {  Types } from '../../reducers/reducersCodly';
import * as S from "./StyledKeyboard";

const initState = {
  keyPressed: [],
};

type KeyProps = {
  key: string,
  className: string,
};

type PropState = {
  keyPressed: KeyProps[],
}

export default function Keyboard({ dispatchCodly, isGameOver, userSolution, isSubmitted, solution }: {
  dispatchCodly: any,
  isGameOver: boolean,
  userSolution: string,
  isSubmitted: boolean,
  solution: any,
}) {
  const [state, setState] = useState<PropState>(initState);

const handleKeys = useCallback((key: string, solution: string) => {
    if (isGameOver) return;

    if (key === "Enter" && userSolution.length === 3) {
      console.log('userSolution.length', userSolution.length);
        dispatchCodly({ type: Types.SetEnterKey });
    }

    if (key === "Backspace" || key === "←") {
      const keyPressed = state.keyPressed.slice(0, -1);
      dispatchCodly({ type: Types.SetBackspaceKey, payload: key  });
      setState((prevState) => ({
        ...prevState,
        keyPressed,
      }));
    }

    if (/[0-9]/gi.test(key) && key.length === 1) {
      let className = "gray";
      const jogada = state.keyPressed.length + 1;
      const col = jogada <= 3 ? jogada - 1 : Math.floor((jogada-1)%3);

      if (key === solution[col]) {
        className = "green";
      }  else if (solution.includes(key)) {
        className = "yellow";
      }  else {
        className = "lightGray";
      }

      const isKeyPressed = state.keyPressed.find((item) => item.key === key);
      const updateKeyPressed = state.keyPressed.map((item) => item.key === key ? { key, className } : item);

      setState((prevState) => ({
        ...prevState,
        keyPressed: isKeyPressed ? updateKeyPressed : [{ key, className }, ...prevState.keyPressed],
      }));
      dispatchCodly({ type: Types.SetAnyKey, payload: key  });
    }
  }, [dispatchCodly, isGameOver, state.keyPressed]);


  const onKeyDown = (e: any) => {
    const key = e.key as string;
    handleKeys(key, solution);
  };

  const onKeyboard = useCallback((letter: string, solution: string) => {
    handleKeys(letter, solution);
  }, [handleKeys]);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <S.Keyboard>
      <S.List>
        {topRow.map((letter) => (
          <S.Key
            className={isSubmitted && !isGameOver && state.keyPressed.find((item) => item.key === letter)?.className || "gray"}
            key={letter}
            onClick={() => {
              onKeyboard(letter, solution);
            }}
          >
            {letter}
          </S.Key>
        ))}
      </S.List>
      <S.List style={{ justifyContent: "center" }}>
        {bottomRow.map((letter) => (
          <S.Key
            className="gray"
            key={letter}
            onClick={() => {
              onKeyboard(letter, solution);
            }}
            style={{ width: letter === "Enter" || letter === "←" ? "80px" : '' }}
          >
            {letter}
          </S.Key>
        ))}
      </S.List>
    </S.Keyboard>
  );
}
