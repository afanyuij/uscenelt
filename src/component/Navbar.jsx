import { BellDot } from "lucide-react"
import { Search } from 'lucide-react';
export function Navbar(){
    return (
        <>
            <nav className="flex fixed top-0 left-0 z-50 shadow-2xl  justify-between p-2 px-4 md:px-8 w-full bg-gradient-to-b from-black/90 via-gray-950 to-gray-900">
                <div className="flex gap-4">
                    <div className="logo flex gap-12 items-center">
                        <img src="/logo/logo.png" className="w-[100px]" alt="" srcset="" />
                        <div className="flex gap-5 text-white pop">
                            <a href="/" className="hover:bg-red-500 p-2  rounded-md duration-200 text-white">Home</a>
                            <a href="/allmovies" className="hover:bg-red-500 p-2  rounded-md duration-200 text-white">All Movies</a>
                            <a href="cartoon" className="hover:bg-red-500 p-2  rounded-md duration-200 text-white">Cartoons</a>
                            <a href="anime" className="hover:bg-red-500 p-2  rounded-md duration-200 text-white">Anime</a>
                            <a href="/shows" className="hover:bg-red-500 p-2  rounded-md duration-200 text-white">Tv Shows</a>
                        </div>
                    </div>
                    </div>
                    <div className="search w-[30%] flex gap-1 items-center pop">
                        <input type="search" className="bg-white/80 p-1 w-full px-5 rounded-4xl outline-none" placeholder="Explore Trending Movies 🔥" name="" id="" />
                        <button className="bg-black text-white p-2 rounded-4xl px-4"><Search/></button>
                    </div>
                  <div className="flex p-2 gap-3 items-center  rounded-md">
                  <BellDot color="#fffafa" strokeWidth={1.5} />
                   

                    <img src="/account/account-img.jpg" className="w-[30px] h-[34px] rounded-4xl" alt=""/>
            
                    </div>  

                

            </nav>
        </>
    )
}