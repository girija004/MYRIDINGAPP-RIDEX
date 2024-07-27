
import React, { createContext, useState } from 'react';

export const RidesContext = createContext();

export const RidesProvider = ({ children }) => {
    const [rides, setRides] = useState([]);

    const addRide = (ride) => {
        setRides([...rides, ride]);
    };

    return (
        <RidesContext.Provider value={{ rides, addRide ,setRides}}>
            {children}
        </RidesContext.Provider>
    );
};
