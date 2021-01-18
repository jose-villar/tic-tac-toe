import React from 'react';
import { StyleSheet, View } from 'react-native';

import globalStyles from '../config/styles';
import Square from './Square';

function Board() {

  return(
    <View style={ styles.board }>

      <View style={styles.row}>
        <Square value="X"></Square>
        <Square value="O"></Square>
        <Square value="X"></Square>
      </View>

      <View style={styles.row}>
        <Square value="X"></Square>
        <Square value="X"></Square>
        <Square value="X"></Square>
      </View>


      <View style={styles.row}>
        <Square value="X"></Square>
        <Square value="X"></Square>
        <Square value="X"></Square>
      </View>

    </View>
  );


}

const styles = StyleSheet.create( {
  board: {
    backgroundColor: globalStyles.colors.black,
    borderWidth:5,
    flex:1,
    flexDirection:"column",
    marginHorizontal:20,
    marginVertical:150,
  },
  row: {
    alignItems:"center",
    backgroundColor:globalStyles.colors.secondary,
    flex:1,
    flexDirection:"row",
  }

} )

export default Board;

