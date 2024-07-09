import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface ResultComponentProps {
  bmi: number;
}

const ResultComponent: React.FC<ResultComponentProps> = ({ bmi }) => {
  const bmiValue = bmi || 30;

  const getBmiCategory = (bmi: number) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  const bmiCategory = getBmiCategory(bmiValue);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>BMI: {bmiValue.toFixed(1)}</Text>
      <Text style={styles.text}>Category: {bmiCategory}</Text>
    </View>
  );
};

export default ResultComponent;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    alignItems: "center",
    width: "70%",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
});
