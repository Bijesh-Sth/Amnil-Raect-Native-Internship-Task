import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {Dice} from '../components';

const DiceRollScreen: React.FC = () => {
    const [rollValue, setRollValue] = useState(1);
  
    const rollDice = () => {
      const newValue = Math.floor(Math.random() * 6) + 1;
      setRollValue(newValue);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>Result: {rollValue}</Text>
        <View style={styles.content}>
        <Dice rollValue={rollValue} />
        <TouchableOpacity onPress={rollDice} style={styles.button} ><Text>Roll Dice</Text></TouchableOpacity>
        </View>
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
    content:{
      flex:1,
      justifyContent:'space-evenly',
      alignItems:'center',
      
    },
    resultText: {
      marginTop: 20,
      fontSize: 24,
      fontWeight: 'bold',
    },
    button:{
      height:'10%',
      width:'80%',
      paddingHorizontal:30,
      borderWidth: 1,
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',

    }
  });
  

export default DiceRollScreen;
