import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import ChatBot from '../components/ChatBot';
import Terminal from '../components/Terminal';

const SplitScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <View style={styles.row}>
        <ChatBot />
      </View>
      <View style={styles.row}>
        <Terminal />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
  },
});

export default SplitScreen;