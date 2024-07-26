import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const backgroundImage = require('../../assets/ae3a7cfb-925a-49f3-bfdd-bffa67df48b0.jpeg');


  const handleSignUp = () => {
    console.log('Sign Up Pressed', { name, email, password, confirmPassword })
    navigation.navigate('ridepoolingscreencard');
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={backgroundImage}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="black"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="black"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          value={password}

          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="black"
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
        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text style={styles.loginLink} onPress={() => navigation.navigate('login')}>
            Login
          </Text>
        </Text>
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
    
  },
  subtitle: {
    fontSize: 18,
    color: '#191970',
    textAlign: 'center',
    marginBottom: 40,
  
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    elevation:10,
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
