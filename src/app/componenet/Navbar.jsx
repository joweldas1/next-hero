"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const session = useSession();

  console.log(session, "session");

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
      title: "Gallery",
      path: "/gallery",
    },

    {
      title: "Meals",
      path: "/meal",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
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
              <Link
                href={d.path}
                className={`${pathName === d.path && "text-yellow-300"}`}
              >
                {d.title}
              </Link>
            </li>
          ))}

          {session?.data && (
            <div className="flex  items-center">
              <Image
                src={session?.data?.user?.image}
                alt="hello"
                height={40}
                width={40}
                className="rounded-full"
              />
              <div className="text-xs">
                <p>{session?.data?.user?.name}</p>
                <p>{session?.data?.user?.email}</p>
                <p>{session?.data?.user?.type}</p>
              </div>
            </div>
          )}

          {session.status === "authenticated" ? (
            <button
              onClick={() => signOut()}
              className="text-white rounded-lg bg-blue-500 py-2 px-3"
            >
              Logout
            </button>
          ) : (
      <>
            <Link href={"/api/auth/signin"}>
              <button className="text-white rounded-lg bg-blue-500 py-2 px-3">
                Login
              </button>
            </Link>
            <Link href={"/api/auth/signup"}>
              <button className="text-white rounded-lg bg-blue-500 py-2 px-3">
                Sign Up
              </button>
            </Link>
      </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
