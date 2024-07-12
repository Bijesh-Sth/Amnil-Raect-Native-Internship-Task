import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { googleSignIn } from '../../../redux/slices/authSlice';

const GoogleSignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const handleGoogleSignIn = async () => {
    try {
      const actionResult = await dispatch(googleSignIn()).unwrap();
      const userData = actionResult as { id: string; name: string; email: string; image: string; };

      console.log('User data after Google Sign-In:', userData);
      Alert.alert('Signed in with Google!');
    } catch (err) {
      Alert.alert('Google Sign-In Error', error || 'An error occurred');
    }
  };

  return (
    <TouchableOpacity
      style={[styles.socialButton, styles.googleButton]}
      onPress={handleGoogleSignIn}
      disabled={loading}
    >
      <Text style={styles.socialButtonText}>
        {loading ? 'Signing in...' : 'Sign in with Google'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  googleButton: {
    backgroundColor: '#ffffff',
    borderColor: '#db4437',
    borderWidth: 1,
  },
  socialButtonText: {
    color: '#000',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default GoogleSignIn;
