import React from 'react';
import { StyleSheet, View, Text, Button, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Start() {
  const navigation = useNavigation();
  
  const reactlogo = require('../../assets/97640dcbd0db6d3d8de623db02dd72dd.png');
  const reactlogo1 = require('../../assets/ae3a7cfb-925a-49f3-bfdd-bffa67df48b0.jpeg');
  const reactlogo2 = require('../../assets/travelling-vacation-design-illustration-free-png.webp');
  const reactlogo3 = require('../../assets/88f2522a2dd4253ce106b83a36439cd6-motivational-travel-signage.webp');

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={reactlogo1}>
        <Text style={styles.text}></Text>
        <Text style={styles.text1}></Text>
        <Image style={styles.image} source={reactlogo} />
        <Image style={styles.image3} source={reactlogo2} />
        <Image style={styles.image4} source={reactlogo3} />

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate('login')}
            title="LOGIN"
            color="black"
            accessibilityLabel="Learn more about this black button"
          />
        </View>
        <View style={styles.buttonContainer1}>
          <Button
            onPress={() => navigation.navigate('signup')}
            title="SIGN UP"
            color="black"
            accessibilityLabel="Learn more about this black button"
          />
        </View>
        <Text style={[styles.text2, styles.textShadow]}>YOUR FAVOURITE RIDING APP</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
    //fontFamily: 'McLaren-Regular',
    position: 'absolute',
    top: 95,
    width: 130,
    justifyContent: 'space-between',
    lineHeight: 50,
    textDecorationLine: 'underline'
  },
  text1: {
    fontSize: 16,
    color: '#191970',
    textAlign: 'center',
    marginBottom: 17,
   // fontFamily: 'McLaren-Regular',
    position: 'absolute',
    bottom: 60,
    right:35
  },
  image: {
    width: 190,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 20,
    position: 'absolute',
    top: 30
  },
  image3: {
    width: 180,
    height: 120,
    resizeMode: 'cover',
    marginBottom: 20,
    position: 'absolute',
  },
  buttonContainer: {
    marginTop: 5,
    width: 80,
    position: 'absolute',
    bottom:50,
    left:70
  },
  buttonContainer1: {
    marginTop: 5,
    width: 80,
    position: 'absolute',
    bottom: 50,
    right:60
  },
  image4: {
    width: 110,
    height: 110,
    position: 'absolute',
    top: 160
  },
  text2: {
    fontSize: 16,
    color: '#ff6347',
    position: 'absolute',
    left: 70,
    right: 30,
    top: 125,
    fontWeight: 'Bold',
    width: 280,
    textAlign: 'center',
  },
  textShadow: {
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 30,
    position:'absolute',
    top:140
  },
});
