import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  BMIResultComponent,
  HeightSelector,
  WeightSelector,
} from "../components";

const BMIScreen: React.FC = () => {
  const [height, setHeight] = useState<number>(160);
  const [weight, setWeight] = useState<number>(70);
  const bmi = Number((weight / ((height / 100) * (height / 100))).toFixed(2));

  return (
    <View style={styles.container}>
      <View
        style={[
          {
            alignItems: "center",
            justifyContent: "center",
          },
          styles.box,
        ]}
      >
        {/* <Text style={{ fontSize: 40 }}>BMI is {bmi}</Text> */}
        <BMIResultComponent bmi={bmi} />
      </View>
      <View
        style={[
          {
            flexDirection: "row",
          },
          styles.box,
        ]}
      >
        <HeightSelector value={height} onChange={setHeight} />
        <View style={{ width: 20 }} />
        <WeightSelector value={weight} onChange={setWeight} />
      </View>
      <View style={ styles.box}>
        <Text>Height: {height} cm</Text>
        <Text>Weight: {weight} kg</Text>
      </View>
    </View>
  );
};

export default BMIScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});
