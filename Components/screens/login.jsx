import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
 // const navigation = useNavigation(); 

  const [password, setPassword] = useState('');
  const backgroundImage = require('../../assets/ae3a7cfb-925a-49f3-bfdd-bffa67df48b0.jpeg');

  const handleLogin = () => {
    window.alert('Login Successful');
    navigation.navigate('ridepoolingscreencard')
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={backgroundImage}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Login to your account</Text>
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
        <View style={styles.buttonContainer}>
          <Button
            onPress={handleLogin}
            title="LOGIN"
            color="#ff7f50"
          />
        </View>
        <Text style={styles.footerText}>
          Don't have an account?{' '}
          <Text style={styles.signupLink} onPress={() => navigation.navigate('signup')}>
            Sign Up
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
    //fontFamily: 'McLaren-Regular',
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
  signupLink: {
    color: 'black',
    fontWeight: 'bold',
  },
});
