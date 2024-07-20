import AboutImg from '../assets/aboutwrk.png'


export default function About(){
    return(
        <section className='flex bg-indigo-700 h-dvh haight devotional'>
            <div className=' md:w-1/2  '>
                 <img src={AboutImg} className=' h-dvh '></img>
            </div>
            <div className=' txt w-1/2 flex py-32 italic flex-col pl-16  text-1xs md:leading-snug md:text-5xl'>
          <h1 className=' text-slate-100 font-bold underline '>About me</h1>
          <p className='flex font-normal '><br></br> I am a passionate developer with background foundation in js,react and building scalable and efficient web applications .</p>
            </div>
        </section>
    )   
}