import logo from "../assets/images/logo.png";
import searchIcon from "../assets/icons/search.png";
import profile from "../assets/icons/profile.png";
import { Link } from "react-router-dom";
import MyContext from "../router/context";
import { useEffect, useContext, useState } from "react";
import { CiBrightnessUp } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useGetUserQuery } from "../redux/features/auth";

const Header = () => {
  const { isSuccess, isFetching, isLoading } = useGetUserQuery();

  const { data, updateData } = useContext(MyContext);
  const [isDarkMode, setIsDarkMode] = useState(data.isDarkMode);
  useEffect(() => {
    setIsDarkMode(data?.isDarkMode);
    if (data?.isDarkMode == true) {
      document.body.style.backgroundColor = "#000";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  }, [data.isDarkMode]);
  return (
    <div className={``}>
      <div
        className={`flex border-b ${
          isDarkMode ? "bg-[#000]" : "bg-[#fff] border-b-2 border-black"
        } border-white border-opacity-10 justify-between items-center py-2 m-auto bg-black-false w-full max-w-screen-xl fixed z-50`}
      >
        <Link to={"/"} className="text-white-false">
          <img src={logo} alt="" className="w-40" />
        </Link>
        <div className="bg-transparent">
          <div className="border w-[360px] h-[36px] border-gray-400 flex justify-between rounded-full bg-transparent z-50">
            <div className="bg-transparent w-full self-center">
              <input
                type="text"
                name=""
                id=""
                className="pl-4 bg-transparent focus:border-0 focus:outline-none placeholder:text-teal-500 text-teal-400 w-full border-none"
                placeholder="Search Here..."
              />
            </div>
            <button className="bg-violet-700 relative w-[67px] h-full z-0 rounded-full flex justify-center items-center">
              <img src={searchIcon} alt="" className="w-[16px]" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-x-1">
          {!isFetching && !isSuccess && (
            <Link
              to="/login"
              className="inline-flex py-[9px] text-white-false px-[20px] items-start gap-[18px] rounded-[100px] bg-violet-700"
            >
              <img src={profile} alt="" />
              Sign In
            </Link>
          )}
          <button>
            {isDarkMode ? (
              <CiBrightnessUp
                onClick={() => updateData({ isDarkMode: false })}
                color="#fff"
                size={32}
              />
            ) : (
              <MdDarkMode
                color="#000"
                size={32}
                onClick={() => updateData({ isDarkMode: true })}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
