import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';

const HelpScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Help</Text>
        <TouchableOpacity style={styles.ticketButton}>
          <Text style={styles.ticketButtonText}>🎟 Tickets</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.lastRideSection}>
        <Text style={styles.sectionTitle}>Your last ride</Text>
        <View style={styles.rideDetails}>
          <View style={styles.rideInfo}>
            <Text style={styles.rideAddress}>4, Fire Station Rd</Text>
            <Text style={styles.rideDateTime}>20 Jun 2024 • 12:23 pm</Text>
            <Text style={styles.ridePrice}>₹57 • Completed</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.fullRideHistory}>Full Ride history</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.helpTopicsSection}>
        <TextInput style={styles.searchInput} placeholder="Search Help Topics" />
        {renderHelpTopic("Safety & Security")}
        {renderHelpTopic("Ride & Billing")}
        {renderHelpTopic("Services")}
        {renderHelpTopic("Account & App")}
        {renderHelpTopic("Referrals")}
        {renderHelpTopic("Payment & Wallets")}
      </View>
    </ScrollView>
  );
};

const renderHelpTopic = (title) => (
  <TouchableOpacity style={styles.helpTopic}>
    <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/019/882/211/original/question-mark-icon-in-doodle-style-help-symbol-vector.jpg' }} style={styles.icon} />
    <Text style={styles.helpTopicText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ticketButton: {
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  ticketButtonText: {
    fontSize: 14,
  },
  lastRideSection: {
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rideDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rideInfo: {
    marginLeft: 10,
  },
  rideAddress: {
    fontSize: 14,
  },
  rideDateTime: {
    fontSize: 14,
    color: '#757575',
  },
  ridePrice: {
    fontSize: 14,
    color: '#757575',
  },
  fullRideHistory: {
    color: '#007BFF',
  },
  helpTopicsSection: {
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 10,
  },
  searchInput: {
    backgroundColor: '#EFEFEF',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  helpTopic: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  helpTopicText: {
    fontSize: 16,
  },
});

export default HelpScreen;
