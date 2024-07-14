import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CalculatorScreen, BMIScreen, DiceRollScreen } from '../../screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomTabsNav = () => (
    <Tab.Navigator
      
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = '';

          if (route.name === 'Calculator') {
            iconName = 'calculator';
          } else if (route.name === 'BMICalculator') {
            iconName = 'scale';
          } else if (route.name === 'Dice') {
            iconName = 'dice-5';
          } 
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
        <Tab.Screen name="Calculator" component={CalculatorScreen} />
        <Tab.Screen name="BMICalculator" component={BMIScreen} />
        <Tab.Screen name="Dice" component={DiceRollScreen} />
    </Tab.Navigator>
);

export default BottomTabsNav;
