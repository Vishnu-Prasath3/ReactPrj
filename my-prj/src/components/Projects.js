import websiteimg from '../assets/espnow.png'
import loraimg from '../assets/loraa.png'


export default function Projects(){
return(
    <section className="flex flex-col py-5 px-5 justify-center bg-primary text-white secondary h-dvh">
    <div className="w-1/2 ">
     <div className="prj-indiv">
       <h1 className="text-2xl font-bold italic border-secondary w-[160px]">Projects</h1>
    </div>
    </div>
    <div className="w-full ">
        <div className='w-1/2 flex  '>
        <img className='h-[300px]' src={websiteimg}/> 
        <img className='h-[400px]' src={loraimg}/> 
        </div> 
        </div>
    </section>
)





}