import Image from 'next/image';
import logo from '/public/logo.jpg'
import {FaUser, FaShoppingCart,FaQuestionCircle,FaCaretDown } from 'react-icons/fa'

export default function Navbar(){
    return(
        <div className='bg-white flex flex-col'>
          <div className='bg-white flex gap-5 sm:gap-20 items-center font-sans justify-between p-3 border-b'>
          
            <div>
                <Image alt='logo' src={logo} width={200} height={100} />
            </div>
            <form className='hidden md:flex gap-1 w-full'>
                <input className='text-xs w-full p-2 rounded border border-gray-300' type="text" placeholder="Search products, brands and categories"/>
                <input className=" bg-orange-500 uppercase font-bold text-xs rounded shadow text-white px-2 py-1 pointer" type="submit" value="search"/>
            </form>

            <div className='flex gap-2 text-xs text-gray-500'>
                
                <div className='flex items-center gap-2'>
                    <span><FaUser/></span>
                    <p>Account</p>
                    <span><FaCaretDown/></span>
                </div>
                
                <div className='flex items-center gap-2'>
                    <span><FaQuestionCircle/></span>
                    <p>Help</p>
                    <span><FaCaretDown/></span>
                </div>

                <div className='flex items-center gap-2'>
                    <span><FaShoppingCart/></span>
                    <p>Cart</p>
                
                </div>
            </div>

            </div>

            <div>
            <form className='  flex gap-1 w-full px-5 my-2 md:hidden'>
                <input className='text-xs w-full p-2 rounded border border-gray-300' type="text" placeholder="Search products, brands and categories"/>
                <input className=" bg-orange-500 uppercase font-bold text-xs rounded shadow text-white px-2 py-1 pointer" type="submit" value="search"/>
            </form>
            </div>


        </div>
    )
}