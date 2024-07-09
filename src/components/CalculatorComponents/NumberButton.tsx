import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

interface NumberButtonProps {
  label: string;
  onPress: () => void;
}

const NumberButton: React.FC<NumberButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 72,
    height: 72,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dbd5c3",
    margin: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 32,
  },
});

export default NumberButton;
