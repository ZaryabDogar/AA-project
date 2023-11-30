import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = ({scrolling}) => {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navBg = scrolling ? "bg-primary" : "bg-transparent";

  return (
    <nav className={`${navBg} font-jost w-full sticky sm:fixed top-0 z-50`}>
      <div className="flex items-center justify-between w-full xl:pr-24 pr-6">
        {/* img  */}
        <div className="flex">
          <img src="/logo.png" alt="" className="xl:w-full sm:w-[200px] w-[160px]" />
        </div>
        {/* content  */}
        <div className="sm:flex hidden">
          <div className="flex ">
            <ul className="decoration-transparent font-jost flex items-center justify-center  text-[18px] md:space-x-20 space-x-6 text-navtext">
              <Link to="/">
                <li className=" font-[500]">Home</li>
              </Link>
              <Link to="/pricing">
                <li className="">Pricing</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* buttons */}
        <div className="flex  text-[18px] md:space-x-12 space-x-3 items-center">
          <div className="sm:flex items-center hidden text-[18px] md:space-x-12 space-x-3 ">
            <Link to="/login">
              <button className="text-navtext2">Login</button>
            </Link>
            <Link to="/signup">
              <button className="font-[700] bg-major  px-8 py-4 text-btntext">
                Signup
              </button>
            </Link>
          </div>
          <button
            type="button"
            className={`  font-medium text-4xl  px-2 py-2 text-center  sm:hidden block`}
            onClick={toggleDropdown}
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
      {/* responsive  */}
      {isOpen && (
        <div className="w-[100vw] p-5 pt-11 bg-primary shadow-xl absolute top-30 border-1">
          <ul className="font-bold text-gray-600 flex flex-col w-full justify-center text-center items-center space-y-4 text-2xl">
            <Link to="/">
              <li
                className={`hover:text-slate-500 transition-colors ease-in duration-200 px-3 py-1 `}
              >
                Home
              </li>
            </Link>
            <Link to="/pricing">
              <li
                className={`hover:text-slate-500 transition-colors ease-in duration-200  px-3 py-1  `}
              >
                Pricing
              </li>
            </Link>
          </ul>
          <div className="flex items-center  text-[18px] space-x-12 justify-center p-12">
            <Link to="/login">
              <button className="text-navtext2">Login</button>
            </Link>
            <Link to="/signup">
              <button className="font-[700] bg-major  px-8 py-4 text-btntext">
                Signup
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
