import Header from "../components/header"
import blipsIcon from '../assets/icons/blips.png'
import downloadIcon from '../assets/icons/download.png'
import shareIcon from '../assets/icons/share.png'
import likeIcon from '../assets/icons/thumbs-up.png'
import dislikeIcon from '../assets/icons/thumbs-down.png'
import Dashboard from '../components/dashboard'
import VideoImage from '../assets/images/video-thumbnail.png'
import AdImage from '../assets/images/ad.png'
import profilePic from '../assets/icons/blips-profile.png'
import { VerifiedTick } from "../assets/svgs"
import liked1 from '../assets/images/liked-1.png'
import Button from '../components/button'
import LineDivider from '../components/divider'

const VideoPage = () => {
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
        <div className="bg-black pb-20 min-h-screen text-white">
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
                            <div className="mt-3 flex gap-x-2 h-[300px]">
                                <div className="w-[60%]">
                                    <img src={VideoImage} alt="video" className="h-full w-full" />
                                </div>
                                <div className="w-[40%] flex flex-col bg-[#1B1B1B] relative">
                                    <img src={AdImage} className="h-full w-full" alt="" />
                                </div>
                            </div>
                            <div className="flex gap-x-2 mt-3">
                                <div className="w-[60%]">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-x-2">
                                            <div className="flex items-center gap-x-4 ">
                                                <div>
                                                    <img src={profilePic} alt="" />
                                                </div>
                                                <div className="flex gap-y-1 flex-col">
                                                    <div className="flex items-center">
                                                        <h1 className="capitalize font-semibold w-[100px] text-[20px]">Gaming world</h1>
                                                        <VerifiedTick width={25} height={25} />
                                                    </div>
                                                    <p className="text-[10px]">18.6k Subscription</p>
                                                </div>
                                            </div>
                                            <Button enabled={'Follow'}>Follow</Button>
                                        </div>
                                        <div className="flex gap-x-3 justify-between items-center">
                                            <div className="flex justify-center items-center gap-x-[6px]">
                                                <img src={likeIcon} alt="like_icon" />
                                                <span>Likes</span>
                                            </div>
                                            <div className="flex justify-center items-center gap-x-[6px]">
                                                <img src={shareIcon} alt="share_icon" />
                                                <span>Share</span>
                                            </div>
                                            <div className="flex justify-center items-center gap-x-[6px]">
                                                <img src={downloadIcon} alt="download_icon" />
                                                <span>Download</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-4 mt-8">
                                        <span className="text-[10px]">Gaming World 171,532 views  Aug 13, 2021 </span>
                                        <a href="#" className="font-bold text-[10px] uppercase">...More</a>
                                    </div>
                                    <LineDivider />
                                    <div>
                                        <h2 className="text-[20px] font-bold">30 Comments</h2>
                                        <div className="flex flex-col gap-y-6 mt-6">
                                            <div className="flex gap-x-2 items-start">
                                                <img src={profilePic} height={59} width={59} alt="" />
                                                <div className="flex flex-col gap-y-3">
                                                    <p className="text-[11px] font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                    <p className="text-[7px]">Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                    <div className="flex gap-x-2">
                                                        <img height={14} width={14} src={likeIcon} alt="" />
                                                        <span className="text-[13px]">8 likes</span>
                                                        <img height={14} width={14} src={dislikeIcon} alt="" />
                                                        <span className="text-[13px]">Reply</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-x-2 items-start">
                                                <img src={profilePic} height={59} width={59} alt="" />
                                                <div className="flex flex-col gap-y-3">
                                                    <p className="text-[11px] font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                    <p className="text-[7px]">Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                    <div className="flex gap-x-2">
                                                        <img height={14} width={14} src={likeIcon} alt="" />
                                                        <span className="text-[13px]">8 likes</span>
                                                        <img height={14} width={14} src={dislikeIcon} alt="" />
                                                        <span className="text-[13px]">Reply</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-x-2 items-start">
                                                <img src={profilePic} height={59} width={59} alt="" />
                                                <div className="flex flex-col gap-y-3">
                                                    <p className="text-[11px] font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                    <p className="text-[7px]">Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                                    <div className="flex gap-x-2">
                                                        <img height={14} width={14} src={likeIcon} alt="" />
                                                        <span className="text-[13px]">8 likes</span>
                                                        <img height={14} width={14} src={dislikeIcon} alt="" />
                                                        <span className="text-[13px]">Reply</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[40%] p-2">
                                    <div className="flex flex-col gap-y-2">
                                        <div className="flex items-center gap-x-4">
                                            <div className="w-[223px] h-[135px]"><img src={liked1} className="w-full h-full" alt="" /></div>
                                            <div className="flex flex-col gap-y-2 h-fit py-2 w-[220px]">
                                                <p className="text-[13px] font-bold">Lorem Ipsimply dummy text um is simply dummy text of the printing </p>
                                                <p className="text-[10px]">Lorem If the printing and typesettingpsum is f the printing and typesettingsimply.</p>
                                                <div className="text-[10px] flex items-center justify-between">
                                                    <span className="font-semibold tracking-wider">Gameforall</span>
                                                    <div className="flex gap-x-2">
                                                        <span>
                                                            532 views
                                                        </span>
                                                        <span>
                                                            1 Month ago
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-4">
                                            <div className="w-[223px] h-[135px]"><img src={liked1} className="w-full h-full" alt="" /></div>
                                            <div className="flex flex-col gap-y-2 h-fit py-2 w-[220px]">
                                                <p className="text-[13px] font-bold">Lorem Ipsimply dummy text um is simply dummy text of the printing </p>
                                                <p className="text-[10px]">Lorem If the printing and typesettingpsum is f the printing and typesettingsimply.</p>
                                                <div className="text-[10px] flex items-center justify-between">
                                                    <span className="font-semibold tracking-wider">Gameforall</span>
                                                    <div className="flex gap-x-2">
                                                        <span>
                                                            532 views
                                                        </span>
                                                        <span>
                                                            1 Month ago
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-4">
                                            <div className="w-[223px] h-[135px]"><img src={liked1} className="w-full h-full" alt="" /></div>
                                            <div className="flex flex-col gap-y-2 h-fit py-2 w-[220px]">
                                                <p className="text-[13px] font-bold">Lorem Ipsimply dummy text um is simply dummy text of the printing </p>
                                                <p className="text-[10px]">Lorem If the printing and typesettingpsum is f the printing and typesettingsimply.</p>
                                                <div className="text-[10px] flex items-center justify-between">
                                                    <span className="font-semibold tracking-wider">Gameforall</span>
                                                    <div className="flex gap-x-2">
                                                        <span>
                                                            532 views
                                                        </span>
                                                        <span>
                                                            1 Month ago
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPage