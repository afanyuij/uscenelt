import { Play } from "lucide-react"
import { Info } from "lucide-react"
import { Navbar } from "../component/Navbar"
import { Footer } from "../component/Footer";
import { CirclePlay } from 'lucide-react';
import { Video } from 'lucide-react';
export function Preview(){
   
    return (
    <>
        <div className="relative h-screen w-full overflow-hidden shadow-2xl">
            <video className="absolute w-full h-screen top-0 left-0 object-cover" autoPlay muted loop playsInline>
                <source src="/public/videos/youtube_lMXh6vjiZrI_1280x720_h264.mp4"></source>
            </video>
           
            <div className="absolute top-0 left-0 h-screen w-full bg-gradient-to-tr from-black via-black/80 to-transparent z-10  "></div>
            <Navbar/>
            <div className="absolute z-20 flex items-center w-full h-full text-white text-center px-4">
             <div className="w-full md:mt-48 lg:mt-64  ">
                 <div className="flex justify-center  md:mb-12 lg:mb-32">
                     <a href="/video">
                        <button className="hover:scale-[1.1] cursor-pointer duration-300"><CirclePlay size={108} color="#145bff" strokeWidth={2.5} /></button>
                        </a>

                 </div>
            <div className=" w-full  ">
                <h1 className="md:text-3xl lg:text-4xl  px-8 text-left font-bold block lg:mt-5 lg:mb-3">Mufasa: The Lion King</h1>
                <p className="text-left w-[60%] mt-10 mb-8 px-8">Mufasa: The Lion King" on Disney+ tells the story of Mufasa's unlikely rise to power,
                     following him as a young cub who forms a bond with Taka,
                      the heir to a royal bloodline, and their journey to overcome adversity and find their destiny. </p>
                      <p className="text-left px-8"><span className="font-bold text-xl">Release :</span> December 20, 2024</p>
                      <p className="text-left px-8"><span className="font-bold text-xl">Duration :</span> 118 minutes</p>
            </div>
         
        </div>
      </div>
        </div>
        <div className="w-full md:h-[90vh] lg:h-[80vh] bg-black p-8 px-8 flex gap-6">
            <div className="w-[10%]">
                <img src="/public/cartoon/mufasa.jpg" className="" alt="" srcset="" />
            </div>
            <div className="w-[90%]">
                <p className="text-white text-2xl font-bold">Mufasa: The Lion King (2024)</p>
                <div className="flex gap-3 mt-4 mb-3">
                    <button className="bg-white rounded-md p-1 px-4 text-black flex gap-2 items-center"><Video size={32} color="#000000" strokeWidth={1.75} /> Trailer</button>
                    <button  className="bg-white rounded-md p-1 px-4 text-black">HD</button>
                    <button className="bg-yellow-500 p-1 px-4 rounded-md">IMDB : 8.3</button>
                </div>
                <p className="text-gray-300 mb-2 w-[70%]">Mufasa: The Lion King" on Netflix (and Disney+) tells the story of Mufasa's unlikely rise from orphaned cub to king, focusing on his journey with a sympathetic lion named Taka (Scar) and their bond, tested by a threat to their pride.  A cub lost and alone meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey.</p>
                <p className="text-white mb-2"><span className="font-bold text-xl">Release :</span> December 20, 2024</p>
                <p className="text-white mb-2 "><span className="font-bold text-xl">Duration :</span> 118 minutes</p>
                <p className="text-white mb-2 "><span className="font-bold text-xl">Genre :</span> Animation</p>
                <p className="text-white mb-4 "><span className="font-bold text-xl">Country :</span> USA</p>
                <div className="flex gap-3">
                    <p className="text-lg text-white">Cast:</p>
                
                <div className="flex gap-4 w-full grid-cols-9 mb-12">
                    <div className="w-[80px]">
                        <img src="/public/cast/blue.jpeg"  className="w-full" alt=""/>
                        <p className="text-white w-full mb-1">Blue Ivy Carter</p>
                        <p className="text-white">Kiara</p>

                    </div>
                    <div className="w-[80px]">
                        <img src="/public/cast/piere.jpeg"  className="w-full" alt=""/>
                        <p className="text-white w-full mb-1">Aaron Pierre</p>
                        <p className="text-white">Mufasa</p>

                    </div>
                    <div className="w-[80px]">
                        <img src="/public/cast/sarabi.jpeg"  className="w-full" alt=""/>
                        <p className="text-white w-full mb-1">Tiffany Boone</p>
                        <p className="text-white">Sarabi</p>

                    </div>
                    <div className="w-[80px]">
                        <img src="/public/cast/simba.jpeg"  className="w-full" alt=""/>
                        <p className="text-white w-full mb-1">Donald Glover</p>
                        <p className="text-white">Simba</p>

                    </div>
                    <div className="w-[80px]">
                        <img src="/public/cast/nala.jpeg"  className="w-full" alt=""/>
                        <p className="text-white w-full mb-1">Beyoncé</p>
                        <p className="text-white">Nala</p>

                    </div>
                    <div className="w-[80px]">
                        <img src="/public/cast/john.jpeg"  className="w-full" alt=""/>
                        <p className="text-white w-full mb-1">John Kani</p>
                        <p className="text-white">Rafiki</p>

                    </div>
                    <div className="w-[80px]">
                        <img src="/public/cast/mads.jpeg"  className="w-full" alt=""/>
                        <p className="text-white w-full mb-1">Mads Mikkelsen</p>
                        <p className="text-white">Kiros</p>

                    </div>
                    <div className="w-[80px]">
                        <img src="/public/cast/timon.jpeg"  className="w-full" alt=""/>
                        <p className="text-white w-full mb-1">Billy Eichner</p>
                        <p className="text-white">Timon</p>

                    </div>
                    <div className="w-[80px]">
                        <img src="/public/cast/scar.jpeg"  className="w-full" alt=""/>
                        <p className="text-white w-full mb-1">Kelvin Harrison Jr.</p>
                        <p className="text-white">Scar</p>

                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full lg:h-[42vh]  bg-gray-950">

<Footer/>
      </div>
    </>
    )
}