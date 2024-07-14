import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, Button } from 'react-native';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const backgroundImage = require('../../assets/ae3a7cfb-925a-49f3-bfdd-bffa67df48b0.jpeg');

  const handleSignUp = () => {
    // Handle the sign-up logic here
    console.log('Sign Up Pressed', { name, email, password, confirmPassword });
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={backgroundImage}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={handleSignUp}
            title="SIGN UP"
            color="#ff7f50"
          />
        </View>
        <Text style={styles.footerText}>Already have an account? <Text style={styles.loginLink}>Login</Text></Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'McLaren-Regular',
  },
  subtitle: {
    fontSize: 18,
    color: '#191970',
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'McLaren-Regular',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
    borderRadius: 10,
  },
  footerText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
  loginLink: {
    color: 'black',
    fontWeight: 'bold',
  },
});
