import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TouchableOpacity style={styles.item}>
          <Image source={{ uri: 'https://image.pngaaa.com/287/4651287-middle.png' }} style={styles.icon} />
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>Ridex Money Wallet</Text>
            <Text style={styles.itemSubtitle}>Wallet balance: ₹0</Text>
            <Text style={styles.itemInactive}>Wallet inactive. Activate from Ridex money app</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Image source={{ uri: 'https://www.pngkey.com/png/full/11-114087_cash-in-hand-icon.png' }} style={styles.icon} />
          <Text style={styles.itemTitle}>Cash</Text>
        </TouchableOpacity>

        <Text style={styles.sectionHeader}>Add Payment Methods</Text>

        <TouchableOpacity style={styles.item}>
          <Image source={{ uri: 'https://www.vhv.rs/dpng/d/411-4117619_phonepe-logo-png-phonepe-logo-transparent-background-png.png' }} style={styles.icon} />
          <Text style={styles.itemTitle}>Add PhonePe Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/circle-payment/32/payment_006-amazon-512.png' }} style={styles.icon} />
          <Text style={styles.itemTitle}>Add Amazon Pay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/022/100/711/original/paytm-logo-transparent-free-png.png' }} style={styles.icon} />
          <Text style={styles.itemTitle}>Add Paytm Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Image source={{ uri: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_170312.png' }} style={styles.icon} />
          <Text style={styles.itemTitle}>Pay by any UPI app</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Image source={{ uri: 'https://cdn.iconscout.com/icon/free/png-256/upi-money-transfer-1817147-1538015.png' }} style={styles.icon} />
          <Text style={styles.itemTitle}>Add UPI Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Image source={{ uri: 'https://images.mysecuritysign.com/img/lg/L/debit-credit-card-accepted-label-lb-2066.png' }} style={styles.icon} />
          <Text style={styles.itemTitle}>Add a Credit/Debit Card</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:30,
    textAlign: 'center',
    color: '#333',
  },
  scrollView: {
    paddingBottom: 20,
  },
  sectionHeader: {
    marginVertical: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  itemContent: {
    flex: 1,
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  itemInactive: {
    fontSize: 12,
    color: 'red',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default PaymentScreen;
