import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import {Dice} from '../components';

const DiceRollScreen: React.FC = () => {
    const [rollValue, setRollValue] = useState(1);
  
    const rollDice = () => {
      const newValue = Math.floor(Math.random() * 6) + 1;
      setRollValue(newValue);
    };
  
    return (
      <View style={styles.container}>
        <Dice rollValue={rollValue} />
        <Button title="Roll Dice" onPress={rollDice} />
        <Text style={styles.resultText}>Result: {rollValue}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    resultText: {
      marginTop: 20,
      fontSize: 24,
      fontWeight: 'bold',
    },
  });
  

export default DiceRollScreen;
