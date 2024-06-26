import React from "react";
export const metadata = {
  title: "Create Next App ",
  description: "about next meta data",
};


// const getTime = async()=>{
//   const res = await fetch(`${process}`,{next:{revalidate:5}})
//   const  data = await res.json()
//   return data.currentTime
// }



const AboutPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-red-700 font-semibold text-2xl">
        This is About Page
      </h1>
   

    </main>
  );
};

export default AboutPage;
