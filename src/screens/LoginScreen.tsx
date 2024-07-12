import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import {  GoogleSignIn, CredientialsLogin} from '../components';

type LoginScreenProps = {
  navigation: any;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TaskApp.</Text>

      <GoogleSignIn />

      <Text style={styles.orText}>or by email</Text>

      <CredientialsLogin /> 

      {loading && (
        <View style={StyleSheet.absoluteFill}>
          <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
        </View>
      )}

      <Text style={styles.footerText}>
        Don't have an account?{' '}
        <Text style={styles.signupText} onPress={() => navigation.replace('Signup')}>
          Create an account
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#6c757d',
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#6c757d',
  },
  signupText: {
    color: '#3498db',
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
