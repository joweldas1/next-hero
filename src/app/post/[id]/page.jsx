
import React from 'react';
const getData =async (id) =>{
    const res =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

//meta api

export const generateMetadata =async ({params}) =>{
    const res =  await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json()
    return {
        title:` ${data.title}`,
        description:data.body,
        keywords:data.body.split(' ')
    }
}



const PostDetails =async ({params}) => {
    const id = params?.id
    const data= await getData(id)

    return (
        <div className='w-full'>
            <div className='w-1/3 mt-20 p-4 mx-auto bg-green-600 border border-red-500 text center'>
            <h1 className='text-2xl text-purple-700 font-semibold'>TItle:{data.title}</h1>
            <h1 className='text-2xl text-purple-700 font-semibold'>TItle:{data.id}</h1>
            <button >Go Back</button>
            </div>
        </div>
    );
};

export default PostDetails;