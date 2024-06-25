'use client';

import Link from "next/link";
import { useState } from "react";

const PostPage = ({data}) => {
    const [show,setShow] = useState(false)

    return (
        <div className="flex min-h-screen flex-col items-center justify-between ">

        <h1 className="text-yellow-700 font-semibold text-5xl my-8 py-3">
           Total post <span className='text-pink-600'>{data?.length}</span>
        </h1>

   
       <div className='grid grid-cols-4 border border-purple-700'>
            {
               show? data?.map((data,idx)=>(
                    <div key={idx} className='border border-pink-500 p-2 m-2   rounded-md  bg-purple-950 customShadow  '>
                        <h1 className='text-center font-semibold text-3xl text-yellow-300'>{idx+1}</h1>
                        <h1 className='text-center'>{data.title}</h1>
                        <h1>{data.description}</h1>
                        <button className="btn p-3 hover:bg-lime-500 bg-pink-400 text-xl font-semibold">
                            <Link href={`/post/${data.id}`}>See Details</Link>
                        </button>
                    </div>
                ))
                :data?.slice(0,28).map((data,idx)=>(
                    <div key={idx} className='border border-pink-500 p-2 m-2  rounded-md  bg-purple-950 customShadow  '>
                        <h1 className='text-center font-semibold text-3xl text-yellow-300'>{idx+1}</h1>
                        <h1 className='text-center'>{data.title}</h1>
                        <h1>{data.description}</h1>
                        <button className="btn p-3 hover:bg-lime-500 bg-pink-400 text-xl font-semibold">
                            <Link href={`/post/${data.id}`}>See Details</Link>
                        </button>
                    </div>
                ))

            }
            
        </div>
        <button className="btn btn-primary w-full h-8 text-xl my-3 bg-purple-900 border-pink-600 border-2" onClick={()=>setShow(!show)} >{show?'Minimize':"Show All"}</button>

      </div>
    );
};

export default PostPage;