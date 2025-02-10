import React from 'react';
import { View, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SplitScreen from '../components/SplitScreen';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SplitScreen />
      <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.iconButton}>
        <Image
          source={require('../assets/graeilabs_icon.jpg')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Button title="Go to Program" onPress={() => navigation.navigate('Program')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconButton: {
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
  icon: {
    width: 50,
    height: 50,
  },
});


export default HomeScreen;
