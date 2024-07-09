import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "../components";

import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Calculator: undefined;
  BMI: undefined;
};

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Calculator" | "BMI">;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Select what you want to do</Text>
      <Button
        title="Go to Calculator"
        onPress={() => navigation.navigate("Calculator")}
      />
      <Button title="Go to BMI" onPress={() => navigation.navigate("BMI")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default HomeScreen;
