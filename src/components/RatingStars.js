import React from 'react';
import './RatingStars.css';

const RatingStars = ({ rating }) => {
  const roundedRating = Math.round(rating);
  
  return (
    <div className="rating-stars">
      {[...Array(5)].map((_, index) => (
        <span 
          key={index} 
          className={index < roundedRating ? 'star filled' : 'star'}
        >
          ★
        </span>
      ))}
      <span className="rating-text">({rating})</span>
    </div>
  );
};

export default RatingStars;