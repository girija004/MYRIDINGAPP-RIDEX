import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const menuItems = [
  { id: '1', title: 'My Rides' },
  { id: '2', title: 'Payments' },
  { id: '3', title: 'Settings' },
  { id: '4', title: 'Help' },
  { id: '5', title: 'Logout' },
];

const MenuComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuContainer}>
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.menuItem}
          onPress={() => navigation.navigate(item.title)}
        >
          <Text style={styles.menuItemText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: 100,
    right: 20,
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

export default MenuComponent;
