// screens/ButtonScreen.js
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CustomButton from '../CustomButton';

export default function ButtonScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Custom Buttons</Text>
      <Text style={styles.description}>This is a primary button</Text>
      <CustomButton
        title="Primary Button"
        kind="primary"
        size="large"
        iconName="star"
        onPress={() => console.log('Primary Button Pressed')}
      />
      <Text style={styles.description}>This is a secondary button</Text>
      <CustomButton
        title="Secondary Button"
        kind="secondary"
        size="large"
        iconName="check"
        onPress={() => console.log('Secondary Button Pressed')}
      />
      <Text style={styles.description}>This is a success button</Text>
      <CustomButton
        title="Success Button"
        kind="success"
        size="large"
        iconName="thumbs-up"
        onPress={() => console.log('Success Button Pressed')}
      />
      <Text style={styles.description}>This is a danger button</Text>
      <CustomButton
        title="Danger Button"
        kind="danger"
        size="large"
        iconName="exclamation-triangle"
        onPress={() => console.log('Danger Button Pressed')}
      />
      <Text style={styles.description}>This is a warning button</Text>
      <CustomButton
        title="Warning Button"
        kind="warning"
        size="large"
        iconName="info-circle"
        onPress={() => console.log('Warning Button Pressed')}
      />
      <Text style={styles.description}>This is an info button</Text>
      <CustomButton
        title="Info Button"
        kind="info"
        size="large"
        iconName="info"
        onPress={() => console.log('Info Button Pressed')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});
