import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNav } from './navigation';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    
    <NavigationContainer>
     <DrawerNav />
    </NavigationContainer>
   
  );
}
