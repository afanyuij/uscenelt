import { Play } from "lucide-react"
import { Info } from "lucide-react"
import { Navbar } from "../component/Navbar"
import { Footer } from "../component/Footer";
export function TvShows(){
    const movies = [0,1,2,3,4,5,6];
    return (
        <>
         <Navbar/>
         <div className="bg-black w-full py-12">
         <h1 className="text-white mt-24 px-8 text-2xl pop font-bold">Featured</h1>
                <div className="flex gap-6 grid-cols-4 px-6 bg-gray-950 py-5 justify-center mt-10 ">
                    
                    {movies.map((movie)=>(
                        <div key={movie} className=" hover:filter hover:grayscale hover:scale-[1.1] duration-300 rounded-md p-4 ">
                            <img src="/drama/adole.jpg" alt="movie" className=""/>
                        </div>
                    ))}
                </div>
                <h1 className="text-white mt-14 mb-8 px-8 text-2xl pop font-bold">Trending shows 🔥</h1>
                <div className="flex gap-6 grid-cols-4 px-6 bg-gray-950 py-5 justify-center">
                    {movies.map((movie)=>(
                        <div key={movie} className="hover:filter hover:grayscale hover:scale-[1.1] duration-300 rounded-md p-4 ">
                            <img src="/drama/artworks-W8KXhQeXZrv2YSJO-ctOyHA-t500x500.jpg" alt="movie" className=""/>
                        </div>
                    ))}
                </div>
                <h1 className="text-white mt-14 mb-8 px-8 text-2xl pop font-bold">Popular Movies</h1>
                <div className="flex gap-6 grid-cols-4 px-6 bg-gray-950 py-5 justify-center">
                    {movies.map((movie)=>(
                        <div key={movie} className="hover:filter hover:grayscale hover:scale-[1.1] duration-300 rounded-md p-4 ">
                            <img src="/drama/dare.jpg" alt="movie" className=""/>
                        </div>
                    ))}
                </div>
                <h1 className="text-white mt-14 mb-8 px-8 text-2xl pop font-bold">Anime</h1>
                <div className="flex gap-6 grid-cols-4 px-6 bg-gray-950 py-5 justify-center">
                    {movies.map((movie)=>(
                        <div key={movie} className="hover:filter hover:grayscale hover:scale-[1.1] duration-300 rounded-md p-4 ">
                            <img src="/drama/pitt.jpg" alt="movie" className=""/>
                        </div>
                    ))}
                </div>
                <h1 className="text-white mt-14 mb-8 px-8 text-2xl pop font-bold">Cartoon</h1>
                <div className="flex gap-6 grid-cols-4 px-6 bg-gray-950 py-5 justify-center">
                    {movies.map((movie)=>(
                        <div key={movie} className="hover:filter hover:grayscale hover:scale-[1.1] duration-300 rounded-md p-4 ">
                            <img src="/drama/white.jpg" alt="movie" className=""/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-fulllg:h-[42vh] md:h-[41vh] bg-gray-950">

            <Footer/>
      </div>
        
        </>
    )
}