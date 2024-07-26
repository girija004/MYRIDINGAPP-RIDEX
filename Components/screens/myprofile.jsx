import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, Dimensions, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faCamera, faUser, faHashtag, faLink, faAlignLeft,
    faPencilAlt, faPhone, faEnvelope, faMars,
    faCalendarDay, faCalendarAlt, faRideshare, faSave
} from '@fortawesome/free-solid-svg-icons';

const { width } = Dimensions.get('window');

export default function App() {
    const [editing, setEditing] = useState(null);
    const [formData, setFormData] = useState({
        name: 'Shubham Patel',
        handle: '@Patel4588',
        url: 'https://www.youtube.com/@Patel4588',
        description: 'Add a description',
        phone: '+1234567890',
        email: 'example@example.com',
        gender: 'Male',
        dob: '01/01/2000',
        memberSince: 'Jan 2020',
        numberOfRides: '50',
        totalRides: '120'
    });
    const [errors, setErrors] = useState({});

    const handleEdit = (field) => {
        setEditing(field);
    };

    const handleSave = () => {
        const newErrors = {};
        if (formData.phone && formData.phone.replace(/\D/g, '').length !== 10) {
            newErrors.phone = 'Phone number must be 10 digits.';
        }
        if (!formData.name || !formData.handle || !formData.url) {
            newErrors.required = 'Name, handle, and URL are required.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            setEditing(null);
            Alert.alert('Success', 'Your changes have been saved.');
        }
    };

    const handleChange = (field, value) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };
    const backgroundImage = require('../../assets/ae3a7cfb-925a-49f3-bfdd-bffa67df48b0.jpeg');
    return (
        <ImageBackground
            source={backgroundImage}
            style={styles.backgroundImage}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Your Profile</Text>
                </View>

                <View style={styles.profileSection}>
                    <View style={styles.profileContainer}>
                        <View style={styles.profilePictureWrapper}>
                            <Image
                                source={{ uri: 'https://i3.wp.com/banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg?ssl=1' }}
                                style={styles.profilePicture}
                            />
                            <TouchableOpacity style={styles.cameraIcon}>
                                <FontAwesomeIcon icon={faCamera} size={20} color="#ffffff" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.numberOfRides}>Rides Taken: {formData.numberOfRides}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    {[
                        { icon: faUser, label: 'Name', field: 'name' },
                        { icon: faHashtag, label: 'Handle', field: 'handle' },
                        { icon: faLink, label: 'Channel URL', field: 'url' },
                        { icon: faAlignLeft, label: 'Description', field: 'description' },
                        { icon: faPhone, label: 'Number', field: 'phone', type: 'tel' },
                        { icon: faEnvelope, label: 'Email', field: 'email', type: 'email' },
                        { icon: faMars, label: 'Gender', field: 'gender' },
                        { icon: faCalendarDay, label: 'DOB', field: 'dob' },
                        { icon: faCalendarAlt, label: 'Member Since', field: 'memberSince' },
                        { icon: faRideshare, label: 'Total Rides', field: 'totalRides' }
                    ].map((item, index) => (
                        <View key={index} style={styles.item}>
                            <FontAwesomeIcon icon={item.icon} size={20} color="#3ea6ff" style={styles.icon} />
                            <Text style={styles.label}>{item.label}</Text>
                            <View style={styles.valueEdit}>
                                {editing === item.field ? (
                                    <>
                                        <TextInput
                                            style={[styles.inputField, errors[item.field] && styles.inputError]}
                                            placeholder={item.label}
                                            value={formData[item.field]}
                                            onChangeText={(text) => handleChange(item.field, text)}
                                            keyboardType={item.type === 'tel' ? 'numeric' : 'default'}
                                            numberOfLines={1}
                                        />
                                        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                                            <FontAwesomeIcon icon={faSave} size={16} color="#ffffff" />
                                        </TouchableOpacity>
                                        {errors[item.field] && <Text style={styles.errorText}>{errors[item.field]}</Text>}
                                    </>
                                ) : (
                                    <>
                                        <Text style={styles.value} numberOfLines={1}>{formData[item.field]}</Text>
                                        <TouchableOpacity onPress={() => handleEdit(item.field)}>
                                            <FontAwesomeIcon icon={faPencilAlt} size={16} color="#3ea6ff" />
                                        </TouchableOpacity>
                                    </>
                                )}
                            </View>
                        </View>
                    ))}
                    <TouchableOpacity style={styles.privacy}>
                        <Text style={styles.privacyText}>Privacy</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flexGrow: 1,
        padding: 20,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ea0d0d',
        paddingBottom: 15,
        marginBottom: 20,
        //backgroundColor: '#81ea08',
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    title: {
        fontSize: 24,
       // color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#e6f1ff',
        borderRadius: 8,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 1,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    profilePictureWrapper: {
        position: 'relative',
    },
    profilePicture: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#3ea6ff',
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#3ea6ff',
        borderRadius: 20,
        padding: 5,
    },
    numberOfRides: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
        marginLeft: 15,
    },
    section: {
       // backgroundColor: '#75c112',
        borderRadius: 8,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 1,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#3850eb4e',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 1,
        flexWrap: 'wrap', 
    },
    icon: {
        color: '#5a0303',
        marginRight: 15,
    },
    label: {
        flex: 1,
        fontSize: 16,
        color: '#555',
    },
    valueEdit: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    value: {
        fontSize: 16,
        color: '#100f13',
    },
    inputField: {
        backgroundColor: '#ffffff',
        borderColor: '#3ea6ff',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        marginRight: 10,
        width: 150,
    },
    inputError: {
        borderColor: '#ff0000',
    },
    editIcon: {
        color: '#100f13',
        marginLeft: 10,
    },
    saveButton: {
        backgroundColor: '#3ea6ff',
        borderRadius: 5,
        padding: 5,
        marginLeft: 10,
    },
    errorText: {
        color: '#ff0000',
        fontSize: 12,
        marginTop: 5,
    },
    privacy: {
        marginTop: 20,
        alignItems: 'center',
    },
    privacyText: {
        fontSize: 16,
        color: '#2e08ea',
    },
});
