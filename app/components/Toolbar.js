import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

import globalStyles from '../config/styles';
import Anchor from './common/Anchor';

function Toolbar() {

  return(
    <View style={ styles.bar }>
      <Anchor style={ globalStyles.textSmall } text="Donate with Paypal" url="https://www.paypal.me/jvillar96" >
        <FontAwesome5 name="donate" size={ 24 } color={ globalStyles.colors.white }/>
      </Anchor>
    </View>
  );

}

const styles = StyleSheet.create( {

  bar: {
    backgroundColor: globalStyles.colors.secondary,
    flexDirection:"row",
    height:48,
    paddingHorizontal:10,
    paddingVertical:10,
  },

});


export default Toolbar;
