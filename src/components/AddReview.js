import React, { useState } from 'react'
const AddReview = () => {
    
    
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');
    

    const handleChange = e => {
        const { name, value } = e.target;
        console.log(name, value)
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'rating':
                setRating(value);
                break;
            case 'review':
                setReview(value);
                break;
            default:
                break;
        }    
    }
    
    const onSubmit = e => {
        e.preventDefault();
    }
    return (
        <form onSubmit={onSubmit}>
            <div className='header'>Add Review</div>
                <div className='row'>
                    <div className='col col-2'>
                        <input type='text' name='name' value={name} onChange={handleChange} placeholder='Name' className='form-control' />
                    </div>
                    <div className='col col-2'>
                        <select name='rating' value={rating} onChange={handleChange} defaultValue='Review' className='form-control'>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                </div>
                <div className='col col-1'>
                    <textarea name='review' value={review} onChange={handleChange} placeholder='Review' className='form-control'></textarea>
                </div>
                <div className='col col-1'>
                    <button className='add-button' style={{float:'right',marginTop:10}} type='submit'>Add Review</button> 
                </div>

            </form> 
    )
}

export default AddReview;