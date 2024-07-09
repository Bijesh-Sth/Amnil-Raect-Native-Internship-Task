import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { NumberButton, OperationButton } from "../components";

const CalculatorScreen: React.FC = () => {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [operator, setOperator] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handelNumberPress = (num: string) => {
    if (result !== null) {
      clear();
      setNum1(num);
    } else {
      if (num1.length < 10) {
        setNum1(num1 + num);
      }
    }
  };

  const handleOperatorPress = (op: string) => {
    if (op === "+/-") {
      if (num1 !== "") {
        setNum1((prevNum) => {
          if (prevNum.startsWith("-")) {
            return prevNum.slice(1);
          } else {
            return "-" + prevNum;
          }
        });
      }
    } else {
      if (result !== null) {
        setNum2(result.toString());
        setNum1("");
        setOperator(op);
        setResult(null);
      } else if (num1) {
        setOperator(op);
        setNum2(num1);
        setNum1("");
      }
    }
  };
  const handleBackspacePress = () => {
    if (num1 !== "") {
      setNum1((prevNum) => prevNum.slice(0, -1));
    }
  };

  const clear = () => {
    setNum1("");
    setNum2("");
    setOperator("");
    setResult(null);
  };

  const firstNumDispaly = () => {
    if (result != null) {
      return <Text style={styles.screenFirstNumber}>{result}</Text>;
    }
    if (num1 === "") {
      return <Text style={styles.screenFirstNumber}>{"0"}</Text>;
    }

    return <Text style={styles.screenFirstNumber}>{num1}</Text>;
  };

  const getResult = () => {
    if (!num1 || !num2 || !operator) return;
    let res = 0;
    switch (operator) {
      case "+":
        res = parseFloat(num2) + parseFloat(num1);
        break;
      case "-":
        res = parseFloat(num2) - parseFloat(num1);
        break;
      case "*":
        res = parseFloat(num2) * parseFloat(num1);
        break;
      case "/":
        res = parseFloat(num2) / parseFloat(num1);
        break;
      default:
        clear();
        return;
    }
    setResult(res);
    setNum1(res.toString());
    setNum2("");
    setOperator("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.num2}>{num2}</Text>
        <Text style={styles.operator}>{operator}</Text>
        <Text style={styles.num1}>{firstNumDispaly()}</Text>
      </View>
      <View style={styles.row}>
        <OperationButton label="C" onPress={clear} />
        <OperationButton
          label="+/-"
          onPress={() => handleOperatorPress("+/-")}
        />
        <OperationButton label="%" onPress={() => handleOperatorPress("%")} />
        <OperationButton label="/" onPress={() => handleOperatorPress("/")} />
      </View>
      <View style={styles.row}>
        <NumberButton label="7" onPress={() => handelNumberPress("7")} />
        <NumberButton label="8" onPress={() => handelNumberPress("8")} />
        <NumberButton label="9" onPress={() => handelNumberPress("9")} />
        <OperationButton label="*" onPress={() => handleOperatorPress("*")} />
      </View>
      <View style={styles.row}>
        <NumberButton label="4" onPress={() => handelNumberPress("4")} />
        <NumberButton label="5" onPress={() => handelNumberPress("5")} />
        <NumberButton label="6" onPress={() => handelNumberPress("6")} />
        <OperationButton label="-" onPress={() => handleOperatorPress("-")} />
      </View>
      <View style={styles.row}>
        <NumberButton label="1" onPress={() => handelNumberPress("1")} />
        <NumberButton label="2" onPress={() => handelNumberPress("2")} />
        <NumberButton label="3" onPress={() => handelNumberPress("3")} />
        <OperationButton label="+" onPress={() => handleOperatorPress("+")} />
      </View>
      <View style={styles.row}>
        <NumberButton label="." onPress={() => handelNumberPress(".")} />
        <NumberButton label="0" onPress={() => handelNumberPress("0")} />
        <OperationButton label="⌫" onPress={handleBackspacePress} />
        <OperationButton label="=" onPress={getResult} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
    left: 30,
  },
  displayContainer: {
    height: 120,
    width: "90%",
    justifyContent: "flex-end",
    alignSelf: "center",
  },
  num2: {
    fontSize: 48,
    textAlign: "right",
  },
  num1: {
    fontSize: 24,
    textAlign: "right",
  },
  operator: {
    color: "purple",
    fontSize: 50,
    fontWeight: "500",
  },
  screenFirstNumber: {
    fontSize: 96,
    color: "gray",
    fontWeight: "200",
    alignSelf: "flex-end",
  },
  screenSecondNumber: {
    fontSize: 40,
    color: "gray",
    fontWeight: "200",
    alignSelf: "flex-end",
  },
  row: {
    maxWidth: "100%",
    flexDirection: "row",
  },
});
export default CalculatorScreen;
