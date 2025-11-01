import '../index.css'

import Button from './ButtonNav'
import MobileNav from './MobileNav'
import NavMenu from './NavMenu'
import {useNavigate} from "react-router-dom";

// interface PageProps {
//   page: string | null;
//   setPage: React.Dispatch<React.SetStateAction<string | null>>;
// }

export default function Header(){
    const navigate = useNavigate();

    return(
        <>
           <div id="Header" className=' sticky top-0 p-5 max-w-7xl mx-auto w-full'>
                <div className='rounded-3xl bg-[#1B1933] p-2'>
                    <div className='flex justify-between px-3 items-center'>
                        <h1 className='text-white text-2xl font font-bold hover:cursor-pointer' onClick={()=>{navigate("/")}}>JW</h1>
                        <div id="DesktopMenu" className='hidden md:flex justify-evenly gap-10 text-[#968d8d]'>                       
                            <NavMenu text="Home" id="/"/>
                            <NavMenu text='About' id='/About'/>
                            <NavMenu text='Portfolio' id='/Portfolio'/>
                            <NavMenu text='Contact' id='/About'/>
                        </div>
                        <Button className="h-10 bg-[#524DD3] text-[100%]" text='Resume' id=''/>
                        <div id="MobileMenu" className="flex md:hidden">
                            <MobileNav/>
                        </div>
                        
                    </div>
                </div>
           </div>
        </>
    )
}