import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';

import Board from './app/components/Board';
import globalStyles from './app/config/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Board></Board>
      <StatusBar barStyle = "dark-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.primary,
  },
});
