import "./index.css"
import ButtonNav from "./Components/ButtonNav"
import ButtonDownload from "./Components/ButtonDownload"

export default function Hero(){
    return(
        <>
            <div id="hero" className="pt-10 pb-10 px-80">
                <div className="flex w-full">
                    <div className="flex flex-col justify-center text-white w-1/2 pl-4 pr-4 animate-slideInRight">

                        <h1 className="text-5xl mb-4 font-bold font-Satoshi">Hi, I'm Jaz Winn</h1>
                        <p className="text-2xl text-[#c7c7c7] mb-5 font-semibold">A full-stack Software Engineer specialized in C++ systems and real-time graphics</p>
                        <div className="flex gap-4">
                            <ButtonNav className="h-10 bg-[#524DD3] text-[100%] font-semibold" text='Contact Me' id='/Jaz-Portfolio/Contact'/>
                            <ButtonDownload className="h-10 bg-[#524DD3] text-[100%] font-semibold" text='Resume' id='Jaz_Winn_Resume.pdf'/>
                        </div>
                    </div>
                    <div className="pl-8 pr-8 flex justify-center w-1/2">
                        <img src="src/assets/Me.JPG" className="w-[100%] h-auto object-cover animate-slideInLeft"></img>
                    </div>


                </div>
            </div>
        </>
    )
}