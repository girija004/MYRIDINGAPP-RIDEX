import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTextInput from '../CustomTextInput';

export default function MainScreen() {
    
  return (
    <View style={styles.container}>
      <CustomTextInput placeholder="Enter to tap..." containerStyle={styles.textInput} />
      <CustomTextInput placeholder="Enter to tap..." containerStyle={styles.textInput} />
      <CustomTextInput placeholder="Enter to tap..." iconName="person" containerStyle={styles.textInput} />
      <CustomTextInput placeholder="Enter to tap..." containerStyle={styles.textInput} />
      <CustomTextInput label="Email" placeholder="Enter to tap..." containerStyle={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  textInput: {
    marginVertical: 10,
  },
});

