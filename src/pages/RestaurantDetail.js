import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';
const RestaurantDetail = props => {
    const [restaurant, setRestaurant] = useState(null);


    const fetchRestaurant = async () => {
        try {
            const { id } = props.match.params;
            const result = await axios.get(`/api/restaurants/${id}`);
            setRestaurant(result.data);
        } catch (err) {
            console.log(err);
        }
    }
        useEffect(() => {
            fetchRestaurant();
        }, [])

    if (!restaurant) return null;
        return (
            <div>
                <div className='header'>{restaurant.restaurant.name}</div>
                <Reviews reviews={restaurant.reviews} />
                <AddReview />
            </div>
        )
}

export default RestaurantDetail;
