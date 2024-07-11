import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNav } from './navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import {API_URL, WEB_CLIENT_ID} from "@env";

export default function App() {
  console.log(API_URL)
  console.log(WEB_CLIENT_ID)

  return (
    
    <NavigationContainer>
     <DrawerNav />
    </NavigationContainer>
   
  );
}
