import Header from "../components/header"
import Dashboard from "../components/dashboard"
import LineDivider from '../components/divider'
import { useState } from "react"
import CopyrightImg from '../assets/images/copyright.png'
import Tabs from "../components/Tabs"

const CopyRightPage = () => {

    const [data, setData] = useState([
        {
            heading: 'User ID',
            definition: 'SXjgK1Hc8JTanKA2uFXAjA'
        },
        {
            heading: 'Channel ID',
            definition: 'SXjgK1Hc8JTanKA2uFXAjA'
        },
        {
            heading: 'Move channel',
            definition: 'You can move your channel to a brand account',
            action: 'Move channel to a brand account'
        },
        {
            heading: 'Delete channel',
            definition: "Deleting your Khrysalis channel won't close your Google Account",
            action: 'Delete channel'
        },
    ])

    return (
        <div className="bg-black pb-20 min-h-screen">
            <div className="max-w-screen-xl m-auto">
                <Header />
                <div className="px-4">
                    {/* Main  */}
                    <div className="flex justify-between relative top-[72px]">
                        <div className="!w-[14%]">
                            <Dashboard isSettingDashboard={true} />
                        </div>
                        <div className="w-[86%] text-white">
                            <div className="flex justify-between items-center">
                                <h1 className="font-semibold text-[25px] mt-4 text-white leading-none">Copyright</h1>
                                <div><img src={CopyrightImg} alt="" width={280} /></div>
                            </div>

                            <div className="mt-6">
                                <Tabs />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CopyRightPage