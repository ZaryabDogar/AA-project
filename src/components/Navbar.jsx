
import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	  };

  return (

    <nav className="bg-white font-jost w-full ">
        <div className="flex justify-between w-full xl:pr-24 pr-6">
            {/* img  */}
            <div className="flex">
                <img src="/logo.png" alt="" className="xl:w-full w-[200px]" />
                
            </div> 
            {/* content  */}
            <div className="sm:flex hidden">
                <div className="flex ">
                    <ul className="decoration-transparent font-jost flex items-center justify-center  text-[18px] md:space-x-20 space-x-6 text-navtext">
                 <li className=" font-[500]">Home</li>
                 <li className="">Pricing</li>
                    </ul>
                </div>
            </div> 
            {/* buttons */}
            <div className="flex  text-[18px] md:space-x-12 space-x-3 items-center">
                <div className="sm:flex hidden text-[18px] md:space-x-12 space-x-3 ">
                <button className="text-navtext2">Login</button>
                <button className="font-[700] bg-major  px-8 py-4 text-btntext">Signup</button>
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
        <div className="w-[100vw] p-5 pt-11 bg-white shadow-xl absolute  top-20 border-1 transition-opacity opacity-100 duration-500">
          <ul className="font-bold text-gray-600 flex flex-col w-full justify-center text-center items-center space-y-4 text-2xl">
          <li className={`hover:text-slate-500 transition-colors ease-in duration-200 px-3 py-1 `}>
          Home
      </li>
      <li className={`hover:text-slate-500 transition-colors ease-in duration-200  px-3 py-1  `}>
      Pricing
      </li>

          </ul>
          <div className="flex  text-[18px] space-x-12 justify-center p-12">
                <button className="text-navtext2">Login</button>
                <button className="font-[700] bg-major  px-8 py-4 text-btntext">Signup</button>
                </div>
        </div>
      )}
        
    </nav>
  )
}

export default Navbar