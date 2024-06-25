
import React from 'react'
import Meals from '../componenet/Meals';
import styles from  './style.module.css'
export const metadata = {
    title: 'Meals',
    description: 'all meal',
  }
       
  



const MealsPage = () => {
    return (
        <div className='p-12'>
            <h1 className='text-3xl text-center text-purple-800 py-4 font-semibold'>Choose your meals</h1>
            <p className={`${styles.text_tomato} text-center  font-semibold text-xl`}>
                Choose your meal by searching
            </p>

           <Meals/>
        </div>
    );
};

export default MealsPage;


