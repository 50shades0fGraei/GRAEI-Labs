import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChatBot from '../components/ChatBot';
import Terminal from '../components/Terminal';

const SplitScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <ChatBot />
      </View>
      <View style={styles.column}>
        <Terminal />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    borderWidth: 1,
    borderColor padding: 10,
  },
});

export default SplitScreen;