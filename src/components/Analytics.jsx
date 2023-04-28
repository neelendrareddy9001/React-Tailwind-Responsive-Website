import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div>
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto gird md:grid-cols-2'>
                <img src={Laptop} alt='/' />
                <div>
                    <p>DATA ANALYTICS DASHBOARD</p>
                    <h1>Manage Data Analytics Centrally</h1>
                    <p>
                         
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Analytics