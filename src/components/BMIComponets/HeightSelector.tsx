import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Slider from "@react-native-community/slider";

interface HeightSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

const HeightSelector: React.FC<HeightSelectorProps> = ({ value, onChange }) => {
  const onTextInputChange = (text: string) => {
    const numericValue = parseFloat(text);
    if (!isNaN(numericValue)) {
      onChange(numericValue);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Height (cm)</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={onTextInputChange}
            value={value.toString()}
          />
        </View>
        <Slider
          style={styles.slider}
          minimumValue={120}
          maximumValue={240}
          step={1}
          value={value}
          onValueChange={onChange}
        />
      </View>
    </View>
  );
};

export default HeightSelector;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    paddingVertical: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "stretch",
    width: "100%",
  },
  inputWrapper: {
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "100%",
  },
  slider: {
    width: "100%",
  },
});
