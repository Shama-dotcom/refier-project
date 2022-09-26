import React from 'react';
import './ReFier.css';
import { Link } from 'react-router-dom'

const Refier = () => {
  return (
    <div className="container">
      <div className="container-center">
        <img
          src="https://dadycandoit.com/wp-content/uploads/2017/09/shutterstock_Dream-Job.jpg"
          className="dream-img"
        />
      </div>
      <div className="container-bottom">
        <h1>Get Hired At</h1>
      </div>
      <div className='container-end'>
      <div className='end-link'>
        <Link className='link-1'>UniAcco</Link>
        </div>
        <div className='end-link'>
        <Link className='link-2'>UniCreds</Link>
        </div>
        <div className='end-link'>
        <Link className='link-3'>UniScholarz</Link>
        </div>
        <div className='end-link'>
        <Link className='link-4'>PowerPlay</Link>
        </div>
        <div className='end-link'> 
        <Link className='link-5'>SenRa</Link>
      </div>
      </div>
    </div>
  );
};

export default Refier;
