import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNav } from './navigation';
import store from './redux/store';
import { Provider } from 'react-redux';
import {API_URL, WEB_CLIENT_ID} from "@env";

export default function App() {
  console.log(API_URL)
  console.log(WEB_CLIENT_ID)

  return (
    <Provider store={store}>
    <NavigationContainer>
     <DrawerNav />
    </NavigationContainer>
    </Provider>
   
  );
}
