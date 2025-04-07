import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Mail } from 'lucide-react';
export function Footer(){
    return (
        <>
    <div className="flex justify-around p-4 px-12  w-full">
        <div className="mt-12">
            <img src="/logo/logo.png" className="mb-4" alt="" srcset="" />
            <div className="flex gap-2">
           <button> <Instagram size={32} color="#fffafa" strokeWidth={2.75} /></button>
           <button><Facebook size={32} color="#fffafa" strokeWidth={2.75} /></button>
           <button><Mail size={32} color="#fffafa" strokeWidth={2.75} /></button>
            </div>
           

            </div>
            <div className="tracking-wide text-white">
                <h2 className='pop font-bold mt-8 mb-3'>Movies </h2>
                <div>
                <a className='block mb-2 text-gray-300' href="#">Tv Shows</a>
                <a className='block mb-2 text-gray-300' href="#">Drama</a>
                <a className='block mb-2 text-gray-300' href="#">Anime</a>
                <a className='block mb-2 text-gray-300' href="#">Action</a> 
                </div>
                
            </div>
            <div className="tracking-wide text-white">
                <h2 className='pop font-bold mt-8 mb-3'>Surport </h2>
                <div>
                <a className='block mb-2 text-gray-300' href="#">Help Center</a>
                <a className='block mb-2 text-gray-300' href="#">FAQ</a>
                <a className='block mb-2 text-gray-300' href="#">Contact Us</a>
                <a className='block mb-2 text-gray-300' href="#">My Account</a> 
                </div>
            </div>
            <div className="tracking-wide text-white ">
                <h2 className='pop font-bold mt-8 mb-3'>About Uscenelt </h2>
                <div>
                <a className='block mb-2 text-gray-300' href="#">About Us</a>
                <a className='block mb-2 text-gray-300' href="#">News & Article</a>
                <a className='block mb-2 text-gray-300' href="#">Legal Notice</a>
                {/* <a className='block mb-2 text-gray-300' href="#">My Account</a>  */}
                </div>
            </div>
            

        </div>
        <div className="w-full p-4 px-5">
            <hr className="text-gray-400 mb-8" />
            <p className="text-center text-white">&copy;Reserved by Afanyu Josiah</p>
        </div>
        </>
    )
}