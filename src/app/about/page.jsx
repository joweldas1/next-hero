import React from "react";
export const metadata = {
  title: "Create Next App ",
  description: "about next meta data",
};


const getTime = async()=>{
  const res = await fetch('http://localhost:3000/time',{next:{revalidate:5  }})
  const  data = await res.json()
  console.log(data);
  return data.currentTime
}



const AboutPage =async () => {
const time = await getTime()
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-red-700 font-semibold text-2xl">
        This is About Page
      </h1>
      <h1 className="text-center font-semibold text-2xl"> Now Time : <span className="text-purple-800">{time}</span></h1>

    </main>
  );
};

export default AboutPage;
