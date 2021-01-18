import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import globalStyles from '../config/styles';

function AppButton( { title, onPress } ) {
  return(
    <TouchableOpacity activeOpacity={0.7} onPress={ onPress } style={styles.button}>
      <Text style={ globalStyles.text }>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex:0.5,
    backgroundColor:globalStyles.colors.secondary,
    alignItems:"center",
    justifyContent:"center",
    width:"100%",

  },
})

export default AppButton;
