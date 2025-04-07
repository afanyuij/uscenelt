import { Frown } from 'lucide-react';
export function PageNotFound(){
    return(
        <div className="w-screen h-screen  bg-slate-950">
            <div className="w-full h-full bg-slate-900  ">
                <div className="w-full h-full flex justify-left ">
                   <div className="w-[20%] h-full flex items-center justify-center">

                   <Frown size={48} color="#ffffff" strokeWidth={2.75} />
                   </div>
                   <div className="h-full bg-amber-950 w-[80%]  p-6">
                    <div className="flex w-full h-full items-center">
                        <div className="">

                        <h1 className="text-3xl text-white font-bold">OH NO! <span className='text-amber-100'>404</span></h1>
                        <h1 className='text-8xl font-bold pop text-gray-200 mb-6'>Page Not Found</h1>
                        <h3 className='text-xl pop text-white mb-8'>This is not probably not what your looking for</h3>
                        <a href="/"><button className='p-3 bg-transparent border-2 border-amber-200 text-white rounded-md hover:scale-[1.1] duration-300'>Return to Home Page</button></a>
                    
                        </div>
                    </div>

                   </div>
                        
                      
                        
                    
                </div>
                

            </div>

        </div>
    )
}