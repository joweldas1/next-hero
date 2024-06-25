import Image from 'next/image';
import React from 'react';




const getData = async(id) =>{
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = res.json()
    return data
}

export async function generateMetadata({ params }) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
    const data = await res.json()
    const meal = data.meals[0]
    console.log(meal.strTags,'----------------------->');


    return {
      title: `${meal?.strMeal}`,
      description:meal.body,
      keywords:meal?.strTags?.split(',')
    
    }
}
const singleMealPage =async ({params}) => {
    const data =await getData(params.idMeal)
    const meal = data.meals[0]
    
    return (
        <div>
            <Image src={meal.strMealThumb} alt='meals image' width={500} height={500} className='border-4 rounded-xl shadow-2xl border-red-600'/>
            
        </div>
    );
};

export default singleMealPage;