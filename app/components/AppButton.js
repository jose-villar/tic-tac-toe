import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import globalStyles from '../config/styles';

function AppButton( { title, onPress } ) {
  return(
    <TouchableOpacity activeOpacity={ 0.7 } onPress={ onPress } style={ styles.button }>
      <Text style={ globalStyles.text }>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  button: {
    alignItems:"center",
    backgroundColor:globalStyles.colors.secondary,
    height:56,
    justifyContent:"center",
    width:"100%",
  },

})

export default AppButton;
