import React from 'react';
import { RidesProvider } from './Components/ridecontext'; // Adjust the path as needed
import AppNavigator from './Components/appnavigator'; // Adjust the path as needed

export default function App() {
    return (
        <RidesProvider>
            <AppNavigator />
        </RidesProvider>
    );
}
