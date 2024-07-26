import React, { useContext, useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RidesContext } from '../ridecontext'; // Update the path if necessary

const MyRidesScreen = () => {
    const { rides, setRides } = useContext(RidesContext);
    const [pastRides, setPastRides] = useState([]);

    useEffect(() => {
        setPastRides([
            { id: 1, date: 'Yesterday', from: 'Office', to: 'Home' },
            { id: 2, date: 'Last Week', from: 'Home', to: 'Office' },
            { id: 3, date: 'Last Month', from: 'Office', to: 'Home' },
        ]);
    }, []);

    const cancelRide = (id) => {
        setRides(rides.filter(ride => ride.id !== id));
    };

    const renderUpcomingRide = ({ item }) => (
        <View key={item.id} style={styles.upcomingRideCard}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.route}>{item.from} ➔ {item.to}</Text>
            <Text style={item.isScheduled ? styles.scheduledStatus : styles.notScheduledStatus}>
                {item.status}
            </Text>
            <Text style={styles.payment}>{item.payment}</Text>
            <TouchableOpacity 
                style={styles.cancelButton}
                onPress={() => cancelRide(item.id)}
            >
                <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );

    const renderPastRide = ({ item }) => (
        <View key={item.id} style={styles.pastRideCard}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.route}>{item.from} ➔ {item.to}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Rides</Text>

            <Text style={styles.sectionTitle}>Upcoming Rides</Text>
            <FlatList
                data={rides}
                renderItem={renderUpcomingRide}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.upcomingRidesContainer}
                ListEmptyComponent={<Text style={styles.emptyText}>No Upcoming Rides</Text>}
                maxToRenderPerBatch={10}
                initialNumToRender={3}
            />

            <Text style={styles.sectionTitle1}>Past Rides</Text>
            <FlatList
                data={pastRides}
                renderItem={renderPastRide}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.pastRidesContainer}
                ListEmptyComponent={<Text style={styles.emptyText}>No Past Rides</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    sectionTitle1: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    upcomingRidesContainer: {
        flexGrow: 1,
        marginBottom: 20,
    },
    upcomingRideCard: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        elevation: 4,
    },
    time: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    route: {
        fontSize: 16,
        marginTop: 5,
        color: '#333',
    },
    status: {
        fontSize: 14,
        marginTop: 5,
        color: '#999',
    },
    pastRidesContainer: {
        paddingHorizontal: 20,
        paddingBottom: 19,
        backgroundColor: '#f0f0f0',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        marginBottom: 20,
    },
    pastRideCard: {
        backgroundColor: '#fff',
        padding: 7,
        borderRadius: 5,
        marginHorizontal: 5,
        width: 150,
        elevation: 8,
        height: 160,
        marginTop: 20,
    },
    scheduledStatus: {
        fontSize: 14,
        marginTop: 5,
        color: 'green',
        fontWeight: 'bold',
    },
    notScheduledStatus: {
        fontSize: 14,
        marginTop: 5,
        color: 'green',
        fontWeight: 'bold',
    },
    payment: {
        fontSize: 14,
        marginTop: 5,
        color: 'blue',
        fontWeight: 'bold',
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#999',
        marginVertical: 20,
    },
    cancelButton: {
        backgroundColor: '#f44336',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default MyRidesScreen;
