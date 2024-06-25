import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./componenet/Navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({subsets:["latin"], weight:["100","200","400","500","800"] } )

export const metadata = {
  title:{
    default:" Next Hero",
    template:"%s | Next Hero"
  },
  description:"Super fast website",
  keyword:['about','hello','gelo ']
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      
      <body className={`${poppins.className} mx-2 `}>
    
       <div className="">
       <Navbar/>
       </div>
        {children}
      </body>
    </html>
  );
}
