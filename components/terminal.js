import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

// Mock function to simulate terminal command execution
const executeCommand = (input) => {
  return "Executing: " + input;
};

const Terminal = () => {
  const [commands, setCommands] = useState([]);
  const [input, setInput] = useState('');

  const runCommand = () => {
    const newCommand = {
      id: commands.length.toString(),
      text: input,
      isUser: true,
    };
    setCommands([...commands, newCommand]);

    // Simulate terminal response
    const terminalResponse = executeCommand(input);
    const newTerminalMessage = {
      id: (commands.length + 1).toString(),
      text: terminalResponse,
      isUser: false,
    };
    setCommands((prevCommands) => [...prevCommands, newTerminalMessage]);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={commands}
        renderItem={({ item }) => (
          <View
            style={[
              styles.command,
              item.isUser ? styles.userCommand : styles.terminalResponse,
            ]}
          >
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Enter command..."
      />
      <Button title="Run" onPress={runCommand} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  command: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  userCommand: {
    backgroundColor: '#d1fcd3',
    alignSelf: 'flex-end',
  },
  terminalResponse: {
    backgroundColor: '#f1f1f1',
    alignSelf: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    borderRadius: 5,
  },
});

export default Terminal;