import Image from "next/image";
import './globals.css';
import { Poppins } from "next/font/google";
import nextsvg from "/public/IMG-1169-removebg-preview.png"


 const Poppin =Poppins({
  subsets:['latin'],
  weight: ['200','700']
 })


export default function Home() {
  return (
     <div>

        <h2 className={Poppin}>
          Hey bro how are this is a next js project
        </h2>
        <h2 className={`${Poppin.className} font-bold`}>
          hey bro how are this is next js project
        </h2>
        <Image src={nextsvg}/>
     </div>
    
  );
}
