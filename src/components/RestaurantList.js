import React, { useEffect, useContext } from 'react'
import axios from 'axios';
import { restaurantContext } from '../context/RestaurantsContext';
import { useHistory } from 'react-router-dom';
const RestaurantList = () => {
    
    const { restaurants, setRestaurants, deleteRestaurant } = useContext(restaurantContext);

    let history = useHistory();

    const fetchRestaurants = async () => {
        try {
            const results = await axios.get("/api/restaurants");
            setRestaurants([...results.data]);
        } catch (err) {
            console.log(err);
        }
    }
    const handleDelete = async (e,id, index) => {
        e.stopPropagation();
        try{
            await axios.delete(`/api/restaurants/${id}`);  
            deleteRestaurant(index);
        }catch(err){
            console.log(err);
        }
    }

    const handleUpdate = (e,id) => {
        e.stopPropagation();
        history.push(`/restaurants/${id}/update`);
    }
    useEffect(() => { 
        fetchRestaurants();
    }, []);
    return (
        <div>
            <table className='table'>
                <thead className='table__head'>
                    <tr onClick={() => history.push(``)} className='table__head--row'>
                        <th>Restaurant</th>
                        <th>Location</th>
                        <th>Price range</th>
                        <th>Ratings</th>
                        <th>Edit</th>
                        <th>Delete</th>                        
                    </tr>
                </thead>
                <tbody>
                    {restaurants.length && restaurants.map((restaurant, index) => (
                        <tr onClick={E => history.push(`/restaurants/${restaurant.id}`)} key={index} className='table__head--row'>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.location}</td>
                            <td>{restaurant.price_range}</td>
                            <td>Ratings</td>
                            <td><button onClick={(e) => handleUpdate(e,restaurant.id)} className='button button__edit'>Edit</button></td>
                            <td><button onClick={(e) => handleDelete(e,restaurant.id, index)} className='button button__delete'>Delete</button></td>                        
                        </tr>
                    )) }
                </tbody>
            </table>            
        </div>
    )
}

export default RestaurantList
