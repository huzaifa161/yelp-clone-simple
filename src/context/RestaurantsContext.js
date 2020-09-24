import React, { useState, createContext } from 'react';

export const restaurantContext = createContext({
    restaurants: [],
    setRestaurants: () => { }
});


const RestaurantsContext = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);

    const addRestaurants = (restaurant) => {
        setRestaurants([...restaurants, restaurant]);
    }

    const deleteRestaurant = index => {
        const newRestaurants = [...restaurants];

        newRestaurants.splice(index, 1);
        setRestaurants([...newRestaurants]);
    }
    return (
        <restaurantContext.Provider value={{ restaurants, setRestaurants, addRestaurants, deleteRestaurant}}>
            {children}
        </restaurantContext.Provider>
    )
}
export default RestaurantsContext;