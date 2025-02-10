import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Terminal from '../components/Terminal'; // Ensure you've created this component

const ProgramScreen = () => {
  const [programCode, setProgramCode] = useState('');
  const [programOutput, setProgramOutput] = useState('');
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);

  const runProgram = () => {
    // Mock function to simulate program execution
    const output = `Output for code: ${programCode}`;
    setProgramOutput(output);
  };

  const toggleTerminal = () => {
    setIsTerminalVisible(!isTerminalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Program Editor</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Enter your program code here..."
        value={programCode}
        onChangeText={setProgramCode}
      />
      <Button title="Run Program" onPress={runProgram} />
      <Text style={styles.outputTitle}>Program Output:</Text>
      <Text style={styles.output}>{programOutput}</Text>

      <TouchableOpacity style={styles.floatingButton} onPress={toggleTerminal}>
        <Text style={styles.floatingButtonText}>Terminal</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isTerminalVisible}
        onRequestClose={toggleTerminal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Button title="Close Terminal" onPress={toggleTerminal} />
            <Terminal />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 100,
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  outputTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  output: {
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f1f1f1',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6200EE',
    borderRadius: 50,
    padding: 15,
  },
  floatingButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
});

export default ProgramScreen;