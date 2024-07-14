import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {DrawerNav} from '../';
import { LoginScreen, SplashScreen } from '../../screens';

const Stack = createStackNavigator();

const StackNav = () => {
    
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Drawer" component={DrawerNav} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
};

export default StackNav;
