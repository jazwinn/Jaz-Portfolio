import "./index.css"
import ButtonNav from "./Components/ButtonNav"
import ButtonDownload from "./Components/ButtonDownload"
import Me from "./assets/ME.jpeg"
import resume from "./assets/JazWinn_Resume.pdf"

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-10 pb-10 px-6 sm:px-12 md:px-20 lg:px-40 xl:px-80"
    >
      <div className="flex flex-col md:flex-row w-full items-center text-center md:text-left">

        <div className="flex flex-col justify-center text-white w-full md:w-1/2 md:pl-4 md:pr-4 animate-slideInRight">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold font-Satoshi">
            Hi, I'm Jaz Winn
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#c7c7c7] mb-5 font-semibold">
            A full-stack Software Engineer specialized in C++ systems and real-time graphics
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <ButtonNav
              className="h-10 bg-[#524DD3] text-[100%] font-semibold"
              text="Contact Me"
              id="/Jaz-Portfolio/Contact"
            />
            <ButtonDownload
              className="h-10 bg-[#524DD3] text-[100%] font-semibold"
              text="Resume"
              id={resume}
              filename="JazWinn_Resume.pdf"
            />
          </div>
        </div>

        <div className="mt-10 md:mt-0 pl-0 md:pl-8 pr-0 md:pr-8 flex justify-center w-full md:w-1/2">
          <img
            src={Me}
            className="w-3/4 sm:w-2/3 md:w-full h-auto object-cover animate-slideInLeft"
            alt="Portrait of Jaz Winn"
          />
        </div>
      </div>
    </section>
  );
}
