import React, { useState, useContext } from 'react'
import { restaurantContext } from '../context/RestaurantsContext';
import axios from 'axios';

const AddRestaurant = () => {

    const { addRestaurants } = useContext(restaurantContext);

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [price_range, setPriceRange] = useState('')



    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'location':
                setLocation(value);
                break;
            case 'price_range':
                setPriceRange(value);
                break;            
            default:
                break;
        }
    }

    const clearInput = () => {
        setName('');
        setLocation('');
        setPriceRange('');
    }


    const onSubmit = async e => {
        e.preventDefault();
        if (!name || !location || !price_range) return;
        const restaurant = { name, location, price_range };
        try {
            const results = await axios.post('/api/restaurants/add-restaurant', restaurant);
            addRestaurants(results.data);
            clearInput();
        } catch (err) {
            clearInput();
            console.log(err);
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col col-3'>
                    <input name='name' value={name} onChange={handleChange} className='form-control' type='text' placeholder='Name' />                
                </div>
                <div className='col col-3'>
                    <input name='location' value={location} onChange={handleChange} className='form-control' type='text' placeholder='Location' />
                </div>
                <div className='col col-3'>
                    <select name='price_range' value={price_range} onChange={handleChange} defaultValue='Price Range' className='form-control'>
                          
                            <option value={1}>$</option>
                            <option value={2}>$$</option>
                            <option value={3}>$$$</option>
                            <option value={4}>$$$$</option>
                            <option value={5}>$$$$$</option>                        
                    </select>
                </div>
                <button className='add-button' type='submit'>Add</button>
            </div>
        </form>
    )
}

export default AddRestaurant
