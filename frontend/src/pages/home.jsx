import Header from "../components/header"
import blipsIcon from '../assets/icons/blips.png'
import hamburger from '../assets/icons/hamburger.png'
import Dashboard from '../components/dashboard'
import video1 from '../assets/images/video-1.png'
import video2 from '../assets/images/video-2.png'
import video3 from '../assets/images/video-3.png'
import video4 from '../assets/images/video-4.png'
import profileIcon from '../assets/icons/profile.png'
import LiveSlider from '../components/liveslider'
import Slider from '../components/sliders'
import { blipLinks, recommendedLinks } from '../components/videoLinks'
import LineDivider from '../components/divider'


const HomePage = () => {
    const categories = [
        'All',
        'Trending',
        'Live',
        'Gaming',
        'Music',
        'Travel',
        'Sports',
        'Animation',
        'Game play',
        'Streaming',
        'Camping',
        'Cast'
    ]
    return (
        <div className="bg-black pb-20">
            <div className="max-w-screen-xl m-auto">
                <Header />
                <div className="px-4">
                    {/* Main  */}
                    <div className="flex justify-between relative top-[72px]">
                        <div className="!w-[14%]">
                            <Dashboard />
                        </div>
                        <div className="w-[86%]">
                            <div className="flex justify-center items-center">
                                <img src={blipsIcon} className="w-[52px]" alt="" />
                            </div>
                            <div className="text-white flex justify-between mt-4 px-1">
                                {
                                    categories?.map(item => {
                                        return <span className="">{item}</span>
                                    })
                                }
                            </div>
                            <div className="flex max-h-[333px] mt-3">
                                <div className='w-[55%] relative'>
                                    <img src={video1} className='h-full w-full' alt="" />
                                    <span className='absolute text-white right-2 top-2 bg-gray-600 px-2 rounded-xl text-sm'>
                                        00:07
                                    </span>
                                </div>
                                <div className='w-[45%]'>
                                    <div className='h-1/2 relative'>
                                        <img src={video2} alt="" className='h-full w-full' />
                                        <span className='absolute text-white right-2 top-2 bg-gray-600 px-2 rounded-xl text-sm'>
                                            00:07
                                        </span>
                                        <div className='absolute bottom-4 left-2 text-white'>
                                            <span className="text-xs block uppercase px-2 border gray-400 rounded-xl bg-gray-700 w-fit">
                                                gaming
                                            </span>
                                            <p className='font-semibold'>Lorem ipsum dolor sit amet.</p>
                                            <div className="flex items-center font-extralight gap-x-1">
                                                <img src={profileIcon} alt="" />
                                                <span className='text-xs'>
                                                    Admin
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-1/2 flex'>
                                        <div className='w-1/2 relative'>
                                            <img src={video3} className='h-full w-full' alt="" />
                                            <span className='absolute text-white right-2 top-2 bg-gray-600 px-2 rounded-xl text-sm'>
                                                00:07
                                            </span>
                                            <div className='absolute bottom-4 left-2 text-white'>
                                                <span className="text-xs block uppercase px-2 border gray-400 rounded-xl bg-gray-700 w-fit">
                                                    gaming
                                                </span>
                                                <p className='font-semibold'>Lorem ipsum dolor sit amet.</p>
                                                <div className="flex items-center font-extralight gap-x-1">
                                                    <img src={profileIcon} alt="" />
                                                    <span className='text-xs'>
                                                        Admin
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-1/2 relative'>
                                            <img src={video4} className='h-full w-full' alt="" />
                                            <span className='absolute text-white right-2 top-2 bg-gray-600 px-2 rounded-xl text-sm'>
                                                00:07
                                            </span>
                                            <div className='absolute bottom-4 left-2 text-white'>
                                                <span className="text-xs block uppercase px-2 border gray-400 rounded-xl bg-gray-700 w-fit">
                                                    gaming
                                                </span>
                                                <p className='font-semibold'>Lorem ipsum dolor sit amet.</p>
                                                <div className="flex items-center font-extralight gap-x-1">
                                                    <img src={profileIcon} alt="" />
                                                    <span className='text-xs'>
                                                        Admin
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <h1 className="font-semibold border-b-2 text-white relative top-[1px] w-fit border-blue-600 z-10">
                                    Live
                                </h1>
                                <LineDivider/>
                                <div className='live-slider'>
                                    <LiveSlider />
                                </div>
                            </div>

                            <div className='text-white mt-5'>
                                <h1 className="font-semibold border-b-2 relative top-[1px] w-fit border-blue-600 z-10">
                                    Blips
                                </h1>
                                <LineDivider/>

                                <div>
                                    <Slider data={blipLinks} blips={true} />
                                </div>

                            </div>
                            <div className='text-white mt-5'>
                                <h1 className="font-semibold border-b-2 uppercase relative top-[1px] w-fit border-blue-600 z-10">
                                    Recommended
                                </h1>
                                <LineDivider/>

                                <div>
                                    <Slider data={recommendedLinks} details = {true}/>
                                </div>
                                <div>
                                    <Slider data={recommendedLinks} details = {true}/>
                                </div>
                                <div>
                                    <Slider data={recommendedLinks} details = {true}/>
                                </div>
                                <div>
                                    <Slider data={recommendedLinks} details = {true}/>
                                </div>
                                <div>
                                    <Slider data={recommendedLinks} details = {true}/>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage