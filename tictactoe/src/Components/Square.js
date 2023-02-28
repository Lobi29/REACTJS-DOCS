import React from 'react';
import "../App.css";

function Square({val, onSquareClick}) {
    return (
        <div className="square" onClick={onSquareClick}>
            {val}
        </div>
    )
}

export default Square;