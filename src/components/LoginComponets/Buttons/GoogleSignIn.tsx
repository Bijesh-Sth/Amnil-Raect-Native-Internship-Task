import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React from 'react';
import { TouchableOpacity, View, StyleSheet, Alert, Text, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

import { WEB_CLIENT_ID } from '@env';

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
});

async function onGoogleButtonPress() {
  try {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const userCredential = await auth().signInWithCredential(googleCredential);
    console.log(googleCredential);
    console.log(userCredential);
    
    // navigation.navigate('Profile');
  } catch (error) {
    console.error(error);
    Alert.alert('Google Sign-In Error', error.message);
  }
}

function GoogleSignIn() {
  // const navigation = useNavigation();

  return (
    <TouchableOpacity style={[styles.socialButton, styles.googleButton]} onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
      {/* <Image source={require('../../assets/google.png')} style={styles.icon} /> */}
      <Text style={styles.socialButtonText}>Signup with Google</Text>
    </TouchableOpacity>
  );
}

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
  icon: {
    width: 20,
    height: 20,
  },
  socialButtonText: {
    color: '#000',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default GoogleSignIn;
