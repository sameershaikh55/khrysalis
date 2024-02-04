import home from '../assets/icons/home.png'
import blips from '../assets/icons/blips.png'
import followers from '../assets/icons/followers.png'
import library from '../assets/icons/library.png'
import history from '../assets/icons/history.png'
import liked from '../assets/icons/liked.png'
import trending from '../assets/icons/trending.png'
import music from '../assets/icons/music.png'
import gaming from '../assets/icons/gaming.png'
import news from '../assets/icons/news.png'
import setting from '../assets/icons/setting.png'
import help from '../assets/icons/help.png'
import feedback from '../assets/icons/feedback.png'
import hamburger from '../assets/icons/hamburger.png'
import { Link } from 'react-router-dom'

const Dashboard = ({ isSettingDashboard }) => {
    const items = [
        [
            {
                icon: hamburger
            },
            {
                title: "home",
                icon: home,
                path: "/"
            }, {
                title: "blips",
                icon: blips
            }, {
                title: "followers",
                icon: followers,
                path: "/followers"
            }, {
                title: "library",
                icon: library,
                path: "/library",
            }, {
                title: "history",
                icon: history,
                path: "/history"
            }, {
                title: "liked",
                icon: liked,
                path: "/liked"
            }, {
                title: "trending",
                icon: trending,
                path: "/trending"
            }, {
                title: "music",
                icon: music,
                path: "/music"
            }, {
                title: "gaming",
                icon: gaming,
                path: "/gaming"
            }, {
                title: "news",
                icon: news,
                path: "/news"
            }
        ], [
            {
                title: "settings",
                icon: setting,
                path: "/settings/account"
            }, {
                title: "report history",
                icon: history,
                path: "/report-history"
            }, {
                title: "help",
                icon: help,
                path: "/help-notification"
            }, {
                title: "send feedback",
                icon: feedback,
                path: "/feedback"
            }
        ]
    ]

    const settingItems = [
        {
            title: "Account",
            path: "/settings/account"
        },
        {
            title: "Notifications",
            path: "/settings/notifications"
        },
        {
            title: "Privacy",
            path: "/settings/privacy"
        },
        {
            title: "Playback and Performance",
            path: "/settings/performance&playback"
        },
        {
            title: "Downloads",
            path: "/settings/downloads"
        },
        {
            title: "Connected Apps",
            path: "/settings/connected-apps"
        },
        {
            title: "Billing and Payments",
            path: "/settings/billing&payment"
        },
        {
            title: "Advance settings",
            path: "/settings/advance"
        }
    ]

    return (
        <div className="flex flex-col w-[12%] fixed h-[90vh] pt-4 top-[60px]">
            {/* <div className="flex flex-col justify-between"> */}
            {
                !isSettingDashboard && items?.map((val, index) => {
                    return (
                        <div className={`text-white ${index == 1 && 'mt-6'}`} >
                            {
                                val?.map((val, index) => {
                                    return (
                                        <div key={val} className='flex flex-col'>
                                            <Link key={val} to={val?.path} className='flex gap-x-2 text-white py-[6px] items-center text-sm hover:text-transparent bg-clip-text bg-gradient-to-r from-[#00E9EE] via-[#5194EC] to-[#D414EE]'>
                                                <img src={val.icon} alt="" className='w-4' />
                                                <span>{val?.title}</span>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
            {
                isSettingDashboard && settingItems?.map((val, index) => {
                    return (
                        <div className='text-white' key={val}>
                            <div className='flex flex-col'>
                                <Link key={val} to={val?.path} className='flex gap-x-2 text-white py-[6px] items-center text-sm hover:text-transparent bg-clip-text bg-gradient-to-r from-[#00E9EE] via-[#5194EC] to-[#D414EE]'>
                                    <span>{val?.title}</span>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Dashboard