import React from 'react';
import { StyleSheet, View } from 'react-native';

import globalStyles from '../config/styles';
import Square from './Square';

function Board({ onClick, squares, winnerLine  }) {

  const renderSquare = (i) => {
    return(
      <Square
        onClick={(id) => onClick(id)}
        value={squares[i]}
        id={i}
        winnerLine={winnerLine}
      />
    );
  }

  return(
    <View style={ styles.board }>

      <View style={styles.row}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>

      <View style={ styles.row }>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>

      <View style={ styles.row }>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>

    </View>
  );
}

const styles = StyleSheet.create( {

  board: {
    backgroundColor: globalStyles.colors.black,
    borderWidth:5,
    flex:2,
    flexDirection:"column",
    marginHorizontal:20,
    marginBottom:120,
  },

  row: {
    alignItems:"center",
    backgroundColor:globalStyles.colors.secondary,
    flex:1,
    flexDirection:"row",
  },

} )

export default Board;
