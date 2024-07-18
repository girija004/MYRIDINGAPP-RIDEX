import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Provider as PaperProvider } from 'react-native-paper';
import { ImageBackground } from 'react-native-web';

export default function Login() {
  
  const backgroundImage = require('../assets/360364 (1).jpg');

  return (
    <PaperProvider>
      <View style={styles.container}>
      <ImageBackground style={styles.imageBackground} source={backgroundImage}>
        <Text style={styles.title}>Select Your Carpooling Role</Text>
        <Text style={styles.subtitle}>You can change it anytime</Text>

        <View style={styles.cardContainer}>
          <Card style={[styles.card, styles.firstCard]} onPress={() => console.log('Ride Taker Pressed')}>
            <Card.Cover source={{ uri: 'https://images.pexels.com/photos/3652766/pexels-photo-3652766.jpeg?cs=srgb&dl=man-in-black-jacket-waiting-for-a-taxi-cab-3652766.jpg&fm=jpg' }} />
            <Card.Content>
              <Text style={styles.cardTitle}>Ride Taker</Text>
              <Text style={styles.cardSubtitle}>Looking for Ride</Text>
            </Card.Content>
          </Card>

          <Card style={styles.card} onPress={() => console.log('Ride Giver Pressed')}>
            <Card.Cover source={{ uri: 'https://i.pinimg.com/originals/f1/c4/1b/f1c41baccd8b90b7ef5e2d65d1accfb6.jpg' }} />
            <Card.Content>
              <Text style={styles.cardTitle}>Ride Giver</Text>
              <Text style={styles.cardSubtitle}>Share Seats</Text>
            </Card.Content>
          </Card>
        </View>
        </ImageBackground>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: 'white',
    position: 'absolute',
    top: 45,
    left: 40,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    color: 'white',
    position: 'absolute',
    top: 100,
    left: 90,
  },
  cardContainer: {
    marginTop: 150, 
    flex:1,
  },
  card: {
    elevation: 4,
    height: 50,
    width: 280,
    alignSelf: 'center',
    marginBottom:350,
    flex:1,
  },
  firstCard: {
    marginBottom: 280,
    height:50, 
    flex:1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8,
  },
  cardSubtitle: {
    fontSize: 15,
    color: 'gray',
  },
  imageBackground:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  }
});


