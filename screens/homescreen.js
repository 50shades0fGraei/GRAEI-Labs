import React from 'react';
import { View, StyleSheet } from 'react-native';
import SplitScreen from '../components/SplitScreen';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SplitScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
