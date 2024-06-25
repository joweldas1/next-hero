'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const navs = [
    {
      title: "Home",
      path: "/",
    },  
    {
      title: "About",
      path: "/about",
    },
    {
      title:"Gallery",
      path:"/gallery"
    },
    
    {
      title: "Meals",
      path: "/meal",
    },
    {
      title: "Posts",
      path: "/post",
    },
 
  ];
  return (
    <div className=" bg-green-500 flex justify-between items-center">
      <div>
        <h1 className="logo text-2xl">
          Next <span className="text-red-500">Hero</span>{" "}
        </h1>
      </div>

      <div>
        <ul className="flex justify-between gap-5 items-center space-x-3">
          {navs.map((d, idx) => (
            <li key={idx} className="flex justify-around gap-3 space-x-4">
              <Link href={d.path} className={`${pathName === d.path && "text-yellow-300"}`}>
                {d.title}
              </Link>
            </li>
          ))}
          <button className="text-white rounded-lg bg-blue-500 py-2 px-3">
            Login
          </button>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
