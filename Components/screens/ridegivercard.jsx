import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RidesContext } from '../ridecontext'; 

const MatchingRideTakers = () => {
    const backgroundImage = require('../../assets/ae3a7cfb-925a-49f3-bfdd-bffa67df48b0.jpeg');
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [users, setUsers] = useState([]);
    const [isGridView, setIsGridView] = useState(false);
    const { addRide } = useContext(RidesContext);
    const navigation = useNavigation();

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => setUsers(data.users))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    const menuItems = [
        { id: '1', title: 'My Profile' },
        { id: '2', title: 'My Rides' },
        { id: '3', title: 'Payments' },
        { id: '11', title: 'Settings' },
        { id: '12', title: 'Help' },
        { id: '13', title: 'Logout' },
    ];

    const handleMenuPress = (id) => {
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
        <View style={styles.container}>
            <ImageBackground style={styles.imageBackground} source={backgroundImage}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        style={styles.iconButton}
                        onPress={() => setIsGridView(!isGridView)}
                    >
                        <Ionicons
                            name={isGridView ? "list" : "grid"}
                            size={24}
                            color="black"
                        />
                    </TouchableOpacity>
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
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Matching Ride Takers</Text>
                </View>
                <ScrollView contentContainerStyle={isGridView ? styles.gridContainer : styles.listContainer}>
                    {users.map(user => (
                        <View key={user.id} style={isGridView ? styles.gridCard : styles.card}>
                            <View style={styles.userDetails}>
                                {user.image && (
                                    <Image
                                        style={styles.userImage}
                                        source={{ uri: user.image }}
                                    />
                                )}
                                <View style={styles.userInfo}>
                                    <Text style={styles.userName}>{user.firstName} {user.lastName}</Text>
                                    <Text style={styles.userStatus}>- User Not Verified</Text>
                                    <View style={styles.timeContainer}>
                                        <Ionicons name="time-outline" size={16} color="black" />
                                        <Text style={styles.rideTime}>1:30 pm</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.rideDetails}>
                                <Text style={styles.routeMatch}>Full route match</Text>
                                <View style={styles.rideInfo}>
                                    <Text style={styles.distance}>60 m (1 min)</Text>
                                    <Image
                                        style={styles.carImage}
                                        source={{ uri: 'https://th.bing.com/th/id/OIP.BrvR9-atH0KR2dbpeW0wxAAAAA?rs=1&pid=ImgDetMain' }}
                                    />
                                    <Text style={styles.distance}>50 m (1 min)</Text>
                                </View>
                            </View>
                            <Text style={styles.points}>45 Points</Text>
                            <TouchableOpacity 
                                style={styles.requestButton}
                                onPress={() => addRide({
                                    id: user.id,
                                    time: '1:30 PM', 
                                    from: 'WHITEFIELD', 
                                    to: 'ELECTRONIC CITY', 
                                    status: 'Waiting for confirmation',
                                    payment:'Payment:PHONEPE'
                                })}
                            >
                                <Text style={styles.requestButtonText}>Request to share</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.inviteButton}>
                                <Text style={styles.inviteButtonText}>Invite your contacts to join the ride</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 2,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    header: {
        padding: 15,
        marginTop: 100,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        zIndex: 1,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    listContainer: {
        padding: 10,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 10,
    },
    card: {
        backgroundColor: '#f9f9f9',
        margin: 10,
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    gridCard: {
        backgroundColor: '#f9f9f9',
        width: '45%',
        margin: 5,
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        alignItems: 'center', 
    },
    userDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userStatus: {
        fontSize: 14,
        color: '#888',
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rideTime: {
        fontSize: 14,
        color: '#888',
        marginLeft: 5,
    },
    rideDetails: {
        alignItems: 'center', 
        marginBottom: 10,
    },
    routeMatch: {
        fontSize: 16,
        color: '#4caf50',
        marginBottom: 10,
    },
    rideInfo: {
        flexDirection: 'column', 
        alignItems: 'center',
    },
    distance: {
        fontSize: 14,
        color: '#888',
    },
    carImage: {
        width: 50,
        height: 50,
        marginVertical: 10, 
    },
    points: {
        fontSize: 16,
        color: '#4caf50',
        marginTop: 10,
    },
    requestButton: {
        backgroundColor: '#4caf50',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
    },
    requestButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    inviteButton: {
        backgroundColor: '#f44336',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
    },
    inviteButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    iconButton: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        elevation: 5,
        position: 'absolute',
        top: 50,
        right: 15,
    },
    menuButton: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        elevation: 5,
        position: 'absolute',
        left: 20,
        top: 40,
    },
    menuButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    menu: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: 100,
        left: 15,
        borderRadius: 5,
        elevation: 5,
        zIndex: 3,
    },
    menuItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    menuItemText: {
        fontSize: 16,
    },
});

export default MatchingRideTakers;
