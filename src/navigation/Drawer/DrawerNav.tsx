import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { CalculatorScreen,BMIScreen, DiceRollScreen, LoginScreen} from '../../screens';
import {ProfileComponent} from '../../components';
import { TabNav } from '..';

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default function DrawerNav() {
  return (
    <Drawer.Navigator drawerContent={(props) => <ProfileComponent {...props} />}>
      <Drawer.Screen name="Home" component={TabNav} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
