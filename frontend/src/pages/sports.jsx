import Header from "../components/header"
import Dashboard from "../components/dashboard"
import { IoFilter } from "react-icons/io5";
import sports1Img from '../assets/images/sports-1.png'
import sports2Img from '../assets/images/sports-2.png'
import sports3Img from '../assets/images/sports-3.png'
import sports4Img from '../assets/images/sports-4.png'

const SportsPage = () => {

    return (
        <div className="bg-black-false pb-20 min-h-screen">
            <div className="max-w-screen-xl m-auto">
                <Header />
                <div className="px-4">
                    {/* Main  */}
                    <div className="flex justify-between relative top-[72px]">
                        <div className="!w-[14%]">
                            <Dashboard />
                        </div>
                        <div className="w-[86%]">
                            <div className="mt-4 text-white-false">
                                <div className="flex justify-between">
                                    <h1 className="font-semibold text-[25px] leading-none">Sports</h1>
                                    <div className="flex gap-x-1 items-center text-base">
                                        <IoFilter />
                                        Filter
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between flex-wrap gap-5 text-white-false mt-8">
                                <div className="w-[232px] flex-col flex gap-y-2">
                                    <div><img src={sports1Img} className="w-[232px] h-[135px]" alt="" /></div>
                                    <span className="block text-[13px] font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                </div>
                                <div className="w-[232px] flex-col flex gap-y-2">
                                    <div><img src={sports2Img} className="w-[232px] h-[135px]" alt="" /></div>
                                    <span className="block text-[13px] font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                </div>
                                <div className="w-[232px] flex-col flex gap-y-2">
                                    <div><img src={sports3Img} className="w-[232px] h-[135px]" alt="" /></div>
                                    <span className="block text-[13px] font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                </div>
                                <div className="w-[232px] flex-col flex gap-y-2">
                                    <div><img src={sports4Img} className="w-[232px] h-[135px]" alt="" /></div>
                                    <span className="block text-[13px] font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                </div>
                                <div className="w-[232px] flex-col flex gap-y-2">
                                    <div><img src={sports1Img} className="w-[232px] h-[135px]" alt="" /></div>
                                    <span className="block text-[13px] font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                </div>
                                <div className="w-[232px] flex-col flex gap-y-2">
                                    <div><img src={sports2Img} className="w-[232px] h-[135px]" alt="" /></div>
                                    <span className="block text-[13px] font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                </div>
                                <div className="w-[232px] flex-col flex gap-y-2">
                                    <div><img src={sports3Img} className="w-[232px] h-[135px]" alt="" /></div>
                                    <span className="block text-[13px] font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                </div>
                                <div className="w-[232px] flex-col flex gap-y-2">
                                    <div><img src={sports4Img} className="w-[232px] h-[135px]" alt="" /></div>
                                    <span className="block text-[13px] font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SportsPage