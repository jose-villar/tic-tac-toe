import React from 'react';
import { StyleSheet, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';

import Game from './app/components/Game';
import globalStyles from './app/config/styles';
import Toolbar from './app/components/Toolbar';

export default function App() {
  return (
    <View style={ styles.container }>
      <StatusBar backgroundColor={ globalStyles.colors.black } style="light" />
      <Toolbar></Toolbar>
      <Game></Game>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: globalStyles.colors.primary,
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },

})
