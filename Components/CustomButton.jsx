import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function CustomButton({ title, kind, size, iconOnly, iconName, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        styles[kind],
        size === 'small' ? styles.smallButton : styles.largeButton
      ]}
    >
      {iconOnly ? (
        <FontAwesome name={iconName} size={size === 'small' ? 20 : 24} color="white" />
      ) : (
        <View style={styles.buttonContent}>
          {iconName && <FontAwesome name={iconName} size={size === 'small' ? 20 : 24} color="white" style={styles.icon} />}
          <Text style={styles.text}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    marginRight: 8,
  },
  smallButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  largeButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  primary: {
    backgroundColor: '#007bff',
  },
  secondary: {
    backgroundColor: '#6c757d',
  },
  success: {
    backgroundColor: '#28a745',
  },
  danger: {
    backgroundColor: '#dc3545',
  },
  warning: {
    backgroundColor: '#ffc107',
  },
  info: {
    backgroundColor: '#17a2b8',
  },
});
