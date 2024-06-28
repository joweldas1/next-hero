"use client";
import customStyle from "./syle.module.css";
import { Poppins } from "next/font/google";
import React from "react";
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "400"] });


const SingUpPage = () => {

  const handleSingUp =async (e) => {

    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const type = form.type.value;
    const password = form.password.value;

 
    const newUser = {name,email,password,image,type}
    console.log(newUser);

    const res = await fetch('http://localhost:3000/api/auth/signup/new-user',{
        method:'POST',
        body:JSON.stringify(newUser),
        headers:{
            'content-type':'application/json'
        },
    })

    if(res?.status===200){
      window.alert("User created done")
    }



  };
  return (
    <div className={`w-full h-screen ${poppins.className}`}>
      <div className="w-2/5 mx-auto h-screen flex items-center justify-center flex-col">
        <h1 className="text-center text-2xl my-4 text-purple-500 font-semibold">
          Sign Up with Email and Password
        </h1>

        <form onSubmit={handleSingUp} className={`${customStyle.form}`}>
          <input
            className={`${customStyle.input}`}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <input
            className={`${customStyle.input}`}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <input
            className={`${customStyle.input}`}
            type="url"
            name="image"
            placeholder="Image url"
          /> <br className="" />
         <select className="mt-3" name="type" defaultValue="user" id="">
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
          <option value="user">User</option>
         </select>
          <input
            className={`${customStyle.input}`}
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button className={`${customStyle.button}`}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default SingUpPage;
