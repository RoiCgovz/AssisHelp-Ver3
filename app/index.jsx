import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My App</Text>
      <TextInput
        placeholder="Enter text"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}
