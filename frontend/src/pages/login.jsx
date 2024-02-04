import Header from "../components/header"
import logo from '../assets/images/logo-2.png'
import Button from '../components/button'

const LoginPage = () => {

    return (
        <div className="bg-black pb-20 min-h-screen">
            <div className="max-w-screen-xl m-auto">
                <Header />
                <div className="h-[86vh] flex justify-center items-center">
                    <div className="flex flex-col gap-y-2">
                        <img src={logo} className="w-[136px] h-[141px] block m-auto" alt="" />
                        <div className="flex flex-col gap-y-3">
                            <input type="text" className="bg-transparent placeholder:text-[#48D6DF] rounded-full  focus:outline-none focus:ring-0 border border-[#48D6DF] text-white pl-6 pr-1 text-sm h-[46px] w-[442px]" placeholder="Full Name" />
                            <input type="text" className="bg-transparent placeholder:text-[#48D6DF] rounded-full  focus:outline-none focus:ring-0 border border-[#48D6DF] text-white pl-6 pr-1 text-sm h-[46px] w-[442px]" placeholder="Email" />
                            <input type="password" className="bg-transparent placeholder:text-[#48D6DF] rounded-full  focus:outline-none focus:ring-0 border border-[#48D6DF] text-white pl-6 pr-1 text-sm h-[46px] w-[442px]" placeholder="Password" />
                        </div>
                        <div className="flex justify-center">
                            <Button enabled={'Login'}>Login</Button>
                        </div>
                        <div className="text-center">
                            <span className="text-[#5E5E5E]">Already registered?</span> <span className="text-[#48D6DF]">Sign in</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LoginPage