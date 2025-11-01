import "./index.css"

export default function Hero(){
    return(
        <>
            <div id="hero" className="pt-10 pb-10 px-80">
                <div className="flex w-full">
                    <div className="flex flex-col justify-center text-white w-1/2 pl-4 pr-4 animate-slideInRight">

                        <h1 className="text-5xl mb-4 font-bold font-Satoshi">Hi, I'm Jaz Winn</h1>
                        <p className="text-2xl text-[#c7c7c7] mb-5 font-semibold">A full-stack Software Engineer specialized in C++ systems and real-time graphics</p>

                    </div>
                    <div className="pl-8 pr-8 flex justify-center w-1/2">
                        <img src="src/assets/Me.JPG" className="w-[100%] h-auto object-cover animate-slideInLeft"></img>
                    </div>


                </div>
            </div>
        </>
    )
}