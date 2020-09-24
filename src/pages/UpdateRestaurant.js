import React, { useState, useEffect } from 'react'
import axios from 'axios';

const UpdateRestaurant = props => {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [price_range, setPriceRange] = useState('');

    const fetchRestaurant = async () => {
        const { id } = props.match.params;
        try {
            const { data} = await axios.get(`/api/restaurants/${id}`);
            setName(data.name);
            setLocation(data.location);
            setPriceRange(data.price_range);
        } catch (err) {
            console.log(err);
        }
    }

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
            const results = await axios.put(`/api/restaurants/${props.match.params.id}`, restaurant);
            props.history.push('/');
            clearInput();
        } catch (err) {
            clearInput();
            console.log(err);
        }
    }

    useEffect(() => {
        fetchRestaurant();
    },[])
    return (
        <form onSubmit={onSubmit}>
            <div className='header'>
               Update Restaurant
            </div>
            <div className='row row__vertical'>
                <div className='col'>
                    <input name='name' value={name} onChange={handleChange} className='form-control' type='text' placeholder='Name' />                
                </div>
                <div className='col'>
                    <input name='location' value={location} onChange={handleChange} className='form-control' type='text' placeholder='Location' />
                </div>
                <div className='col'>
                    <select name='price_range' value={price_range} onChange={handleChange} defaultValue='Price Range' className='form-control'>
                          
                            <option value={1}>$</option>
                            <option value={2}>$$</option>
                            <option value={3}>$$$</option>
                            <option value={4}>$$$$</option>
                            <option value={5}>$$$$$</option>                        
                    </select>
                </div>
                <div className='col'>
                    <button className='add-button' type='submit'>UPDATE</button>
                </div>
            </div>
        </form>
    )
}

export default UpdateRestaurant
