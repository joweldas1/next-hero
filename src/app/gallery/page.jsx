import Image from 'next/image';
import React from 'react';

export const metadata={
    title:"Gallery",
    description:'Gallery'
}


const GalleryPage = () => {
    return (
        <div className=' w-full px-10 py-5 mx-auto'>
            <h1 className="text-center font-semibold text-2xl">Gallery Page</h1>

         <div className='grid md:grid-cols-2 gap-5'>
         {
                [1,2,3,4,5]?.map((img)=>(
                    
                    <Image key={img} src={`/img/${img}.jpg`} width={1024} height={1080} className=' mx-auto my-3' alt="" />
                ))
            }
         </div>
         
        </div>
    );
};

export default GalleryPage;