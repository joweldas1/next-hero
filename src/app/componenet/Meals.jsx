"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search,setSearch] = useState('j')
    const [meals,setMeals] = useState([])
    const [error,setError] = useState(false)
    console.log(meals);
    
    
    const loadData =(async()=>{
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            const data = await res.json()
            const err =  data?.meals
            
            setMeals(data.meals) 
            setError(false)  
        } catch (error) {if(error) setError(true)  }
    })

    useEffect(()=>{
        loadData()
    },[])
  
    return (
      <div>
          <div>
          <input  onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search your meal' className='p-2 rounded-md text-red-600' />
          <button onClick={()=>loadData()} className='p-2 bg-green-500 rounded-md ml-5'>Search</button>
        </div>

        <div> 
            <h1 className='text-center font-semibold text-2xl text-purple-950 '>Search result found:{meals?.length}</h1>
            <hr />
          <div className='grid grid-cols-4 border border-purple-800 gap-3'>
          {
           meals?.length>0 ?  meals?.map((d,idx)=>(
                <div className=' border-orange-500 border-2 p-2 m-2' key={idx} >
                    <h1 className='font-semibold text-purple-900 '>Name : {d.strMeal}</h1>
                    <Image src={d?.strMealThumb} alt='meal img' width={500} height={500}/>
                    <h1 className='font-semibold text-purple-900 '>Name : {d.strInstructions.slice(0,100)}</h1>
                    <button className='btn btn-secondary'> <Link href={`/meal/${d.idMeal}`}>See Details</Link> </button>
                  
                </div>
            ))
            :
            <h1 className='font-semibold text-center w-full'> data not found...... </h1>
           }
          
          </div>
        </div>
      </div>
    );
};

export default Meals;