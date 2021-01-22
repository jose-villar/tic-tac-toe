import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Board from './Board';
import AppButton from './AppButton';
import globalStyles from '../config/styles';

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [winnerLine, setWinnerLine] = useState([]);

  const handleNewGame = () => {
    setSquares(Array(9).fill(""));
    setXIsNext(true);
    setStepNumber(0);
    setWinnerLine([]);
  }

  const renderMesagge= () => {
    let player = "O";
    if(xIsNext) player = "X";
    let message = "" + player;
    if(stepNumber == 9) message="It's a Draw";
    if(calculateWinner()) message = calculateWinner() + " Wins!";
    return(
      <View style={styles.topMessage}>
        <Text style={ globalStyles.textBig }>{message}</Text>
      </View>
    );
  }

  const handleClick = (i) => {
    if(squares[i] || calculateWinner()) return;
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(! xIsNext);
    setStepNumber(stepNumber + 1);
  };

  const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        if(winnerLine.length == 0) setWinnerLine([a, b, c]);
        return squares[a];
      }
    }

    return null;
  }


  return(
    <>
      {renderMesagge()}
      <Board onClick={handleClick} squares={squares} winnerLine={winnerLine} />
      <AppButton title="New Game" onPress={handleNewGame} />
    </>
  );
}

const styles = StyleSheet.create({

  topMessage: {
    alignItems:"center",
    flex:1,
    justifyContent:"center",
    marginVertical:20,
  },

});

export default Game;
