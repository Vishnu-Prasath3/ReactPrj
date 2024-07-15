import { Bars4Icon } from '@heroicons/react/24/solid'




export default function Header(){
    // const [toggleMenu, setToggleMenu]=useState(false);
   let myfunc=()=>{
    var x=document.getElementById("nav-btn");
    if(x.style.display==="block"){
        x.style.display="none"
    }
    else{
        x.style.display="block"
    }
    
}
 return (
    <header className="flex text-white justify-between px-5 bg-primary py-4 text-lg ">
        <a href="#" className="text-black font-bold ">D.Vishnu prasath</a>
        <nav className="hidden md:block ">
             <ul className="flex ">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contact</a></li>
        </ul></nav>

        <button onClick={myfunc} className="block md:hidden"><Bars4Icon className='text-white h-5'></Bars4Icon></button>
        <nav id= "nav-btn" className="hidden  mobile-nav py-5">
             <ul className="flex flex-col ">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contact</a></li>
        </ul></nav>                                                                         
         {/* <button onClick={()=> setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars4Icon className='text-white h-5'></Bars4Icon></button> */} 
        </header>
 )   
}