import '../index.css'

import Button from './ButtonDownload'
import MobileNav from './MobileNav'
import NavMenu from './NavMenu'
import { useNavigate, useLocation } from "react-router-dom";

// interface PageProps {
//   page: string | null;
//   setPage: React.Dispatch<React.SetStateAction<string | null>>;
// }

export default function Header(){
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    return(
        <>
           <div id="Header" className=' sticky top-0 p-5 max-w-7xl mx-auto w-full'>
                <div className='rounded-3xl bg-[#1B1933] p-2'>
                    <div className='flex justify-between px-3 items-center'>
                        <h1 className='text-white text-2xl font font-bold hover:cursor-pointer' onClick={()=>{navigate("/Jaz-Portfolio")}}>JW</h1>
                        <div id="DesktopMenu" className='hidden md:flex justify-evenly gap-10 text-[#968d8d]'>                       
                            <NavMenu text="Home" id="/Jaz-Portfolio" active={currentPath === "/Jaz-Portfolio"} />
                            <NavMenu text="About" id="/Jaz-Portfolio/About" active={currentPath === "/Jaz-Portfolio/About"} />
                            <NavMenu text="Projects" id="/Jaz-Portfolio/Projects" active={currentPath === "/Jaz-Portfolio/Projects"} />
                            <NavMenu text="Contact" id="/Jaz-Portfolio/Contact" active={currentPath === "/Jaz-Portfolio/Contact"} />
                        </div>
                        <Button className='h-10 bg-[#524DD3] text-[100%]' text='Resume' id='Jaz_Winn_Resume.pdf'/>
                        <div id="MobileMenu" className="flex md:hidden">
                            <MobileNav/>
                        </div>
                        
                    </div>
                </div>
           </div>
        </>
    )
}