import { FaSquareXTwitter  } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


import Heroimg from "../assets/supermario.png"
export default function Hero(){
    return (<section >
       <div className="w-full h-screen bg-white flex flex-col justify-between bg-secondary py-32 md:flex-row">
      <div className=" pl-40 decoration-8 text-slate-200	text-6xl italic md:py-28 py-0 flex flex-col">   
       
       <h1>Hi,<br/> I am <strong className="text-white">Vishnu prasath</strong>
       <p className="text-4xl py-6">I'm a full stack developer</p></h1>
       <div className="flex space-x-9  text-slate-950" >
       <a href="#"><FaSquareXTwitter/></a>
       <a href="#"><CiLinkedin /> </a>
       <a href="#"><FaInstagram /></a>
       </div>
       </div>
       <div>
 <img className="md:flex" src={Heroimg}></img>
       </div>
       </div>
     
       
    </section>)
}