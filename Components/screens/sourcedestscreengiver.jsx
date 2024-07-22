import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, ImageBackground, TouchableOpacity, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const rides = [
  { id: 1, time: '9:00 AM', from: 'Home', to: 'Office', matches: 'Match found' },
  { id: 2, time: '6:00 PM', from: 'Office', to: 'Home', matches: 'Scheduled' },
  { id: 3, time: '11:00 AM', from: 'Home', to: 'Shop', matches: 'No Matches' }
];

const menuItems = [
  { id: '2', title: 'My Rides' },
  { id: '3', title: 'Payments' },
  { id: '11', title: 'Settings' },
  { id: '12', title: 'Help' },
  { id: '13', title: 'Logout' },
];

const RideCard = ({ time, from, to, matches }) => (
  <TouchableOpacity style={styles.card}>
    <Text style={styles.time}>{time}</Text>
    <Text style={styles.route}>{from} → {to}</Text>
    <Text style={styles.matches}>{matches}</Text>
  </TouchableOpacity>
);

export default function Sourcedestgiver() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigation = useNavigation(); 

  const handleSearch = () => {
    console.log('Search Pressed');
    navigation.navigate('ridegivercard');
  };

  const handleMenuPress = (id) => {
    // Navigate to the respective screen based on the menu item id
    switch (id) {
      case '2':
        navigation.navigate('MyRides');
        break;
      case '3':
        navigation.navigate('payment');
        break;
      case '11':
        navigation.navigate('setting');
        break;
      case '12':
        navigation.navigate('help');
        break;
      case '13':
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
    <ScrollView style={styles.container}>
      <ImageBackground source={require('../../assets/EV.png')} style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.headerText}>"You are helping to reduce traffic congestion inside the city"</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="📍Enter Pickup Location"
          />
          <TextInput
            style={styles.input}
            placeholder="📍Enter Drop Location"
          />
          <View style={styles.buttonContainer}>
            <Button
              onPress={handleSearch}
              title="SEARCH"
              color="#ff7f50"
            />
          </View>
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
      <View style={styles.upcomingRides}>
        <Text style={styles.sectionTitle}>Upcoming Rides</Text>
        {rides.map(ride => (
          <RideCard key={ride.id} {...ride} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: 270,
    position: 'absolute',
    top: -37,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  header: {
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    position: 'absolute',
    top: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    backgroundColor: 'gray',
    color: 'white',
    left: 0,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: 100,
    height: 10,
    marginLeft: 110,
    marginTop: 10,
  },
  inputContainer: {
    padding: 15,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    position: 'absolute',
    top: 120,
    width: '100%',
    height: 200,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    elevation: 3,
    width: 300,
    marginLeft: 20,
  },
  upcomingRides: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'absolute',
    top: 540,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 130,
    left: 120,
  },
  card: {
    backgroundColor: '#fff',
    padding: 13,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    display: 'flex',
    marginLeft: 5,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  route: {
    fontSize: 14,
    marginVertical: 5,
  },
  matches: {
    fontSize: 12,
    color: 'gray',
  },
  menuButton: {
    backgroundColor: '#ff7f50',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    top: 50,
    left: 10,
  },
  menuButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  menu: {
    position: 'absolute',
    top: 100,
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
