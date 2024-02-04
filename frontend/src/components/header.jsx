import logo from '../assets/images/logo.png'
import searchIcon from '../assets/icons/search.png'
import profile from '../assets/icons/profile.png'
import crescent from '../assets/icons/crescent.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="flex border-b border-white border-opacity-10 justify-between items-center py-2 m-auto bg-black w-full max-w-screen-xl fixed z-50">
            <Link to={'/'} className="text-white"><img src={logo} alt="" className="w-40" /></Link>
            <div className="bg-transparent">
                <div className="border w-[360px] h-[36px] border-gray-400 flex justify-between rounded-full bg-transparent z-50">
                    <div className="bg-transparent w-full self-center">
                        <input type="text" name="" id="" className="pl-4 bg-transparent focus:border-0 focus:outline-none placeholder:text-teal-500 text-teal-400 w-full" placeholder="Search Here..." />
                    </div>
                    <button className="bg-violet-700 relative w-[67px] h-full z-0 rounded-full flex justify-center items-center">
                        <img src={searchIcon} alt="" className='w-[16px]' />
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-x-1">
                <button className='inline-flex py-[9px] text-white px-[20px] items-start gap-[18px] rounded-[100px] bg-violet-700'>
                    <img src={profile} alt="" />
                    Sign In
                </button>
                <img src={crescent} alt="" className='w-8 h-8' />
            </div>
        </div>
    )
}

export default Header