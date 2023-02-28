import './App.css';
import { useState } from 'react';
import Square from "./Components/Square";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return player;
        }

        return val;
      })
    );


    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }


  return (
    <div className="App">
      <div className="board">

        <div className="row">
          <Square val={board[0]} onSquareClick={() => {
            chooseSquare(0);
          }}
          />
          <Square val={board[1]} onSquareClick={() => {
            chooseSquare(1);
          }}
          />
          <Square val={board[2]} onSquareClick={() => {
            chooseSquare(2);
          }}
          />
        </div>
        <div className="row">
          <Square val={board[3]} onSquareClick={() => {
            chooseSquare(3);
          }}
          />
          <Square val={board[4]} onSquareClick={() => {
            chooseSquare(4);
          }}
          />
          <Square val={board[5]} onSquareClick={() => {
            chooseSquare(5);
          }}
          />
        </div>
        <div className="row">
          <Square val={board[6]} onSquareClick={() => {
            chooseSquare(6);
          }}
          />
          <Square val={board[7]} onSquareClick={() => {
            chooseSquare(7);
          }}
          />
          <Square val={board[8]} onSquareClick={() => {
            chooseSquare(8);
          }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;


// {/* <Square val={board[0]} onSquareClick={() => { alert(0); }}
// /> */}