import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import globalStyles from '../config/styles';

function Square( { id, onClick, value, winnerLine } ) {

  const isInWinnerLine = () => {
    return winnerLine && winnerLine.includes(id);
  }

  const handleStyle = () => {
    return(
      isInWinnerLine() ? styles.winnerSquare
                       : styles.square
    );
  }

  return(
    <TouchableOpacity onPress={ () => onClick( id ) } style={ handleStyle() }>
      <Text style={ globalStyles.textBig }>{ value }</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  square: {
    alignItems:"center",
    borderWidth:5,
    flex:1,
    height:"100%",
    justifyContent:"center",
  },

  winnerSquare: {
    alignItems:"center",
    borderColor:globalStyles.colors.orange,
    borderWidth:5,
    flex:1,
    height:"100%",
    justifyContent:"center",
  },
})

export default Square;
