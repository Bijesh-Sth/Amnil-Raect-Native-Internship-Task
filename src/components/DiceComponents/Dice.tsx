import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { Easing, useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

interface DiceProps {
  rollValue: number;
}

const getDiceDots = (rollValue: number): string => {
  switch (rollValue) {
    case 1:
      return '•';
    case 2:
      return '•   •';
    case 3:
      return '•   \n  • \n    •';
    case 4:
      return '•   •\n\n•   •';
    case 5:
      return '•   •\n  •\n•   •';
    case 6:
      return '•   •\n•   •\n•   •';
    default:
      return '';
  }
};

const Dice: React.FC<DiceProps> = ({ rollValue }) => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withTiming(Math.random() * 360, {
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    });
  }, [rollValue]);

  const dotsRepresentation = getDiceDots(rollValue);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <Animated.View style={[styles.dice, animatedStyle]}>
      <Text style={styles.diceText}>{dotsRepresentation}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  dice: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    padding: 8,
  },
  diceText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 32,
  },
});

export default Dice;
