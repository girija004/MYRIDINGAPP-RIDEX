import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { Card, Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const menuItems = [
  { id: '1', title: 'My Profile' },
  { id: '2', title: 'My Rides' },
  { id: '3', title: 'Payments' },
  { id: '4', title: 'Settings' },
  { id: '5', title: 'Help' },
  { id: '6', title: 'Logout' },
];

export default function Screencard() {
  const backgroundImage = require('../assets/360364 (1).jpg');

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigation = useNavigation();

  const handleSearch = () => {
    console.log('Search Pressed');
    navigation.navigate('ridegivercard');
  };

  const handleMenuPress = (id) => {
    // Navigate to the respective screen based on the menu item id
    switch (id) {
      case '1':
        navigation.navigate('myprofile');
        break;
      case '2':
        navigation.navigate('myrides');
        break;
      case '3':
        navigation.navigate('payment');
        break;
      case '4':
        navigation.navigate('setting');
        break;
      case '5':
        navigation.navigate('help');
        break;
      case '6':
        navigation.navigate('login');
        break;
      default:
        console.log('Unknown menu item');
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem} onPress={() => handleMenuPress(item.id)}>
      <Text style={styles.menuItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <PaperProvider>
      <View style={styles.container}>
        <ImageBackground style={styles.imageBackground} source={backgroundImage}>
          <Text style={styles.title}>Select Your Carpooling Role</Text>
          <Text style={styles.subtitle}>You can change it anytime</Text>

          <View style={styles.cardContainer}>
            <Card
              style={[styles.firstCard]}
              onPress={() => navigation.navigate('mapscreentaker')}
            >
              <Card.Cover source={{ uri: 'https://images.pexels.com/photos/3652766/pexels-photo-3652766.jpeg?cs=srgb&dl=man-in-black-jacket-waiting-for-a-taxi-cab-3652766.jpg&fm=jpg' }} />
              <Card.Content>
                <Text style={styles.cardTitle}>Ride Taker</Text>
                <Text style={styles.cardSubtitle}>Looking for Ride</Text>
              </Card.Content>
            </Card>

            <Card
              style={styles.card}
              onPress={() => navigation.navigate('mapscreengiver')}
            >
              <Card.Cover source={{ uri: 'https://i.pinimg.com/originals/f1/c4/1b/f1c41baccd8b90b7ef5e2d65d1accfb6.jpg' }} />
              <Card.Content>
                <Text style={styles.cardTitle}>Ride Giver</Text>
                <Text style={styles.cardSubtitle}>Share Seats</Text>
              </Card.Content>
            </Card>
          </View>

          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => setIsMenuVisible(!isMenuVisible)}
          >
            <Text style={styles.menuButtonText}>☰</Text>
          </TouchableOpacity>

          {isMenuVisible && (
            <FlatList
              data={menuItems}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              style={styles.menu}
            />
          )}
        </ImageBackground>
      </View>
    </PaperProvider>
  );
}

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
    top: 75,
    left: 40,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    color: 'white',
    position: 'absolute',
    top: 115,
    left: 90,
  },
  cardContainer: {
    marginTop: 150,
    flex: 1,
  },
  card: {
    elevation: 4,
    height: 180,
    width: 230,
    alignSelf: 'center',
    marginBottom: 0,
    marginTop:30
  },
  firstCard: {
    marginBottom: 100,
    height: 180,
    marginTop:20
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8,
  },
  cardSubtitle: {
    fontSize: 15,
    color: 'white',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  menuButton: {
    backgroundColor: '#ff7f50',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    top: 40,
    left: 8,
  },
  menuButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  menu: {
    position: 'absolute',
    top: 90,
    left: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    elevation: 5,
  },
  menuItem: {
    padding: 10,
  },
  menuItemText: {
    fontSize: 16,
  },
});
