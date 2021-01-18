import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function Square( { value, onClick } ) {

  return(
    <TouchableOpacity onPress={onClick} style={ styles.square }>
      <Text style={{ fontSize:40 }}>{value}</Text>
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
  }
})

export default Square;
