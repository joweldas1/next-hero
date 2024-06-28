import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
export const metadata = {
  title: "Create Next App ",
  description: "about next meta data",
};






const AboutPage =async () => {
  const session = await getServerSession(authOptions)
console.log(session,'session-----------1>');


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-red-700 font-semibold text-2xl">
        This is About Page
      </h1>
   

    </main>
  );
};

export default AboutPage;
