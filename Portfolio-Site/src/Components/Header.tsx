import '../index.css'
import Button from './ButtonNav'
import MobileNav from './MobileNav'
import NavMenu from './NavMenu'

export default function Header(){


    return(
        <>
           <div id="Header" className='sticky p-5 px-20 w-full'>
                <div className='rounded-3xl bg-[#1B1933] p-2'>
                    <div className='flex justify-between px-3 items-center'>
                        <h1 className='text-white font font-bold'>Jaz Winn</h1>
                        <div id="DesktopMenu" className='hidden md:flex justify-evenly gap-10 text-[#968d8d]'>
                            <NavMenu text='Home' id=''/>
                            <NavMenu text='About' id=''/>
                            <NavMenu text='Portfolio' id=''/>
                            <NavMenu text='Contact' id=''/>
                        </div>
                        <Button className="h-8 bg-[#524DD3] text-[80%]" text='Get Started' id=''/>
                        <div id="MobileMenu" className="flex md:hidden">
                            <MobileNav/>
                        </div>
                        
                    </div>
                </div>
           </div>
        </>
    )
}