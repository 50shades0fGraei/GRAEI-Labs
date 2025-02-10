import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

// Mock function to simulate chatbot response
const getChatbotResponse = (input) => {
  return "This is a chatbot response to: " + input;
};

const ChatBot = () => {
  const [messages, setMessages] = useState([]);