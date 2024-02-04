import Header from "../components/header"
import Dashboard from "../components/dashboard"
import blipsIcon from '../assets/icons/blips-icon.png'
import Slider from "../components/sliders"
import { blipLinks } from "../components/videoLinks"

const HistoryPage = () => {

    return (
        <div className="bg-black pb-20 min-h-screen">
            <div className="max-w-screen-xl m-auto">
                <Header />
                <div className="px-4">
                    {/* Main  */}
                    <div className="flex justify-between relative top-[72px]">
                        <div className="!w-[14%]">
                            <Dashboard />
                        </div>
                        <div className="w-[86%] text-white">
                            <h1 className="text-[25px] font-bold">
                                Watch History
                            </h1>
                            <div className="mt-6">
                                <h2>Today</h2>
                                <div>
                                    {/* <img src={blipsIcon} alt="" /> */}
                                </div>
                                <div>
                                    <Slider blips={true} data={blipLinks} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HistoryPage