// AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Start from './screens/start'; // Adjust the path as needed
import Login from './screens/login'; // Adjust the path as needed
import SignUp from './screens/signup'; // Adjust the path as needed
import Screencard from './ridepoolingscreencard'; // Adjust the path as needed
import Sourcedesttaker from './screens/sourcedestscreentaker';
import RideGiverCard from './screens/ridegivercard';
import Sourcedestgiver from './screens/sourcedestscreengiver';
import  MatchingRideTakers from './screens/ridetaker';
import PaymentScreen from './screens/payment'
import SettingsScreen from './screens/setting';
import HelpScreen from './screens/help';
import Mapscreengiver from './screens/mapscreengiver';
import MapScreen from './screens/mapscreentaker';
import MyRidesScreen from './screens/myrides';
import Profile from './screens/myprofile';
import {RidesContext} from './ridecontext';


const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="start">
                <Stack.Screen name="start" component={Start} options={{ headerShown: false }} />
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="signup" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="ridepoolingscreencard" component={Screencard} options={{ headerShown: false }} />
                <Stack.Screen name="sourcedestscreentaker" component={Sourcedesttaker} options={{ headerShown: false }} />
                <Stack.Screen name="ridegivercard" component={RideGiverCard} options={{ headerShown: false }} />
                <Stack.Screen name="sourcedestscreengiver" component={Sourcedestgiver} options={{ headerShown: false }} />
                <Stack.Screen name="ridetaker" component={MatchingRideTakers} options={{ headerShown: false }} />
                <Stack.Screen name="payment" component={PaymentScreen} options={{ headerShown: false }} />
                <Stack.Screen name="setting" component={SettingsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="help" component={HelpScreen} options={{ headerShown: false }} />
                <Stack.Screen name="mapscreengiver" component={Mapscreengiver} options={{ headerShown: false }} />
                <Stack.Screen name="mapscreentaker" component={MapScreen} options={{ headerShown: false }} />
                <Stack.Screen name="myrides" component={MyRidesScreen} options={{ headerShown: false }} />
                <Stack.Screen name="myprofile" component={Profile} options={{ headerShown: false }} />





            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
