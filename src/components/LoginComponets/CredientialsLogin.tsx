import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { usernamePasswordSignIn } from '../../redux/slices/authSlice';
import Icon from 'react-native-vector-icons/Ionicons';

type UsernamePasswordSignInProps = {
  onLoginSuccess: () => void;
};

const UsernamePasswordSignIn: React.FC<UsernamePasswordSignInProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const handleSignIn = async () => {
    try {
      await dispatch(usernamePasswordSignIn({ username, password })).unwrap();
      onLoginSuccess();
      Alert.alert('Signed in successfully!');
      setPassword('');
      setUsername('');
    } catch (err) {
      Alert.alert('Sign-In Error', error || 'An error occurred');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={username}
        onChangeText={setUsername}
      />
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity style={styles.toggleButton} onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="#3498db" />
        </TouchableOpacity>
      </View>
      <Button title={loading ? 'Signing in...' : 'Sign In'} onPress={handleSignIn} disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingLeft: 8,
  },
  toggleButton: {
    padding: 8,
  },
});

export default UsernamePasswordSignIn;
