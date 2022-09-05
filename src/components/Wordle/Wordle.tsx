import React from "react";
import Board from "../Board";
import Keyboard from "../Keyboard";
import LockIcon from '@mui/icons-material/Lock';
import { WordleStore } from "../../contexts/WordleStore";

const Wordle = ({ wordList, solution }: {
  wordList: any;
  solution: any;
}) => (
  <WordleStore wordList={wordList} solution={solution}>
    <div style={{ display: 'flex' }}>
    <LockIcon fontSize="large" style={{ fontSize: "80px" }} />
    <h1 className="center" style={{ fontFamily: 'Roboto Condensed', fontSize: '22px' }}>
      CRACK THE
      <br />PASSWORD
    </h1>
    </div>
    <p>A numeric lock has 3 digit key </p>
    <Board />
    <div className="center">
      <Keyboard />
    </div>
  </WordleStore>
);

export default Wordle;