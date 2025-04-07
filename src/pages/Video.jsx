import { Navbar } from "../component/Navbar"
export function Video(){
    return(
        <div className="relative top-0 left-0 overflow-hidden h-screen w-screen">
            <Navbar/>
            
                <video className="absolute left-0 top-0 object-cover h-full w-full" controls >
                    <source src="/public/videos/youtube_lMXh6vjiZrI_1280x720_h264.mp4" type="" />
                </video>
          
        </div>
    )
}