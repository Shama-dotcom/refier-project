import React from 'react';
import './MarketPlace.css';

function MarketPlace() {
  return (
    <div className='market-section'>
    <div className='market-left'>
      <h1>Explore Refier Marketplace</h1>
      <h3>
        Boost your career through live Trainings, Mentoring and Coaching with
        handholding by reputed and experienced subject matter experts
      </h3>
      </div>

      <div className='market-right'>
        <img src="https://www.refier.com/static/media/marketplace_poster.92a68366.svg" className='market-img'/>
      </div>
    </div>
  );
}
export default MarketPlace;
