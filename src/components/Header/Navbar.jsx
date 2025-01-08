import logo2 from '../../assets/logo2.svg'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='flex justify-between items-center px-5 md:px-8 py-1 max-w-screen-lg mx-auto'>
            <div className='w-36 cursor-pointer'>
                <img src={logo2} alt="Medblend" />
            </div>
            <div className='hidden md:flex space-x-14 items-center text-sm'>
                <div>
                    <ul className='flex space-x-9 cursor-pointer'>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/franchise'>Franchise</Link>
                        <Link to='/about-us'>About Us</Link>
                        <Link to='/products'>Products</Link>
                    </ul>
                </div>
                <div>
                    <Link to='/contact-us' className='bg-orange-500 text-white p-3 rounded-md cursor-pointer'>Contact Us</Link>
                </div>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleMenu}>
                    {isOpen ? <img src={close} alt="close" className='w-6' /> : <img src={menu} alt="menu" className='w-8' />}
                </button>
            </div>
            {isOpen && (
                <div className='absolute top-[92px] left-0 w-full p-2 bg-white'>
                    <div className='flex flex-col'>
                        <ul className='text-lg cursor-pointer'>
                            <Link to='/'><li onClick={toggleMenu} className='border-[1px] p-2 border-black my-1'>Home</li></Link>
                            <Link to='/franchise'><li onClick={toggleMenu} className='border-[1px] p-2 border-black my-1'>Franchise</li></Link>
                            <Link to='/about-us'><li onClick={toggleMenu} className='border-[1px] p-2 border-black my-1'>About Us</li></Link>
                            <li onClick={toggleMenu} className='border-[1px] p-2 border-black flex justify-between items-center'>
                                <Link to='/products'>Products</Link>
                                <Link to='/contact-us' className='bg-orange-500 text-xl text-white px-4 py-3 rounded-lg cursor-pointer'>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
