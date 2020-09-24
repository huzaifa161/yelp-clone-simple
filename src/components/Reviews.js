import React from 'react'
import StarRating from './StarRating';

const Reviews = ({ reviews }) => {
    return (
        <div className='row'>
            {reviews.map(review => {
                return (
                    <div className='card'>
                        <div className='card__header'>
                            <div className='card__header--name'>{review.name}</div>
                            <div className='card__header--rating'><StarRating rating={review.rating} /></div>
                        </div>
                        <div className='card__review'>{review.review}</div>
                    </div>
                )
            })}            
            
        </div>
    )
}


export default Reviews;

