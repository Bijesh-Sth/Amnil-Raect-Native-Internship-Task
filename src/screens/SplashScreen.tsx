import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAppSelector } from '../redux/hooks';

type SplashScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    setTimeout(() => {
    //   navigation.replace(isAuthenticated ? 'Drawer' : 'Login');
    navigation.replace('Drawer');
    }, 2000);
  }, [isAuthenticated, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TaskApp</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
});

export default SplashScreen;
