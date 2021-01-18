import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Game from './app/components/Game';
import globalStyles from './app/config/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Game></Game>
      <StatusBar style="light"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.primary,
  },
});
