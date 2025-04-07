import { Play } from "lucide-react"
import { Info } from "lucide-react"
import { Navbar } from "../component/Navbar"
import { Footer } from "../component/Footer";
export function Home(){
    const movies = [
        // {
        //   title: "Back in Action",
        //   description: "Fifteen years after vanishing from the CIA to start a family, elite spies Matt and Emily jump back into the world of espionage when their cover is blown.",
        //   image: "/public/movie/backinaction.jpg",
        // }
        0,1,2,3
      ];
    return (
        <>
        
        <div className="w-screen bg-black">
           
            <div className="w-screen lg:h-[80vh] bg pt-16">
            <Navbar/>
            
            <div className="w-[60%] h-full lg:mt-42 md:mt-24 px-14 bg-gradient-to-r from-bl">
                <div className="flex items-center mb-5">
                <img src="/public/logo/logo.png" className="w-[80px] md:w-[60px]" alt=""  />
                <h1 className="text-2xl md:text-xl font-bold tracking-wider text-white ml-4 pop">MOVIES</h1>
                </div>

                <h1 className="text-9xl lg:text-6xl font-bold text-gray-300 pop italic block w-full ">Mufasa:</h1>
                <h1 className="text-9xl lg:text-7xl font-bold text-gray-300  block w-full mb-8 "> The Lion King</h1>
                <p className="pop text-gray-400 w-[60%] md:w-[70%] mb-10">A cub lost and alone meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey.</p>
                <div className="flex gap-6 ">
                    

                    <a href="/preview">
                    <button className="pop p-2 bg-gray-200 rounded-md px-12 flex items-center gap-2"><Play className="" /> Play  </button> 
                    </a>
                
                    <button className="pop p-2 bg-black rounded-md px-12 text-white flex gap-3"><Info color="#ffffff" strokeWidth={1} /> More Info</button>
                </div>
            </div>
           
         
        </div>
        <div className="w-full bg-black h-[190vh] ">
                <h1 className="text-white pop mb-4 px-12 text-2xl mt-8">Trending Movies Now 🔥</h1>
                <div className="flex  gap-6 p-12 bg-gray-950 px-12 ">
                    {movies.map((movie) => (
                        <a key={movie} href="/preview " className="w-[30%] bg-black hover:scale-[1.1] cursor-pointer transition duration-200 filter hover:grayscale ">

                        {/* <div key={movie} className="w-[30%] bg-black hover:scale-[1.1] cursor-pointer transition duration-200 filter hover:grayscale "> */}
                            <img src="/public/movie/backinaction.jpg" alt="" className=" rounded-md" />
                            
                        {/* </div> */}
                        </a>
                    ))}
                </div>
                <h1 className="text-white pop text-2xl mt-8 px-12 mb-4">Popular Movies </h1>
                <div className="flex  gap-6 p-12 bg-gray-950 px-12 ">
                    {movies.map((movie) => (
                         <a key={movie} href="/preview " className="w-[30%] bg-black hover:scale-[1.1] cursor-pointer transition duration-200 filter hover:grayscale ">
                            <img src="/public/movie/venom.jpg" alt="" className=" rounded-md w-full" />
                            
                        </a>
                    ))}
                </div>
                <h1 className="text-white pop text-2xl mt-8 px-12 mb-4">Family show </h1>
                <div className="flex  gap-6 p-12 bg-gray-950 px-12 ">
                    {movies.map((movie) => (
                         <a key={movie} href="/preview " className="w-[30%] bg-black hover:scale-[1.1] cursor-pointer transition duration-200 filter hover:grayscale ">
                            <img src="/public/cartoon/Mufasa-wallpaper.jpg" alt="" className=" rounded-md w-full" />
                            
                       </a>
                    ))}
                </div>
                <h1 className="text-white pop text-2xl mt-8 px-12 mb-4">Family show </h1>
                <div className="flex  gap-6 p-12 bg-gray-950 px-12 ">
                    {movies.map((movie) => (
                         <a key={movie} href="/preview " className="w-[30%] bg-black hover:scale-[1.1] cursor-pointer transition duration-200 filter hover:grayscale ">
                            <img src="/public/cartoon/1a6bc9122478301.Y3JvcCw0NDg0LDM1MDcsMjMzLDA.jpg" alt="" className=" rounded-md w-full" />
                            
                       </a>
                    ))}
                </div>
                    <div className="w-full h-[42vh] bg-black">

              <Footer/>
                    </div>
            </div>
             </div>
        </>
    )
}