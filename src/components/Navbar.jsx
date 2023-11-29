import React from 'react'
const Navbar = () => {
  return (

    <nav className="bg-white font-jost w-full ">
        <div className="flex justify-between w-full pr-20">
            {/* img  */}
            <div className="flex">
                <img src="/logo.png" alt="" className="" />
                
            </div> 
            {/* content  */}
            <div className="flex">
                <div className="flex ">
                    <ul className="decoration-transparent font-jost flex items-center justify-center  font-[500] text-[18px] space-x-20">
                 <li className="">Home</li>
                 <li className="">Pricing</li>
                    </ul>
                </div>
            </div> 
            {/* buttons */}
            <div className="flex text-[18px]">
                <button className="">Login</button>
                <button className="font-[700]">Signup</button>

            </div>

        </div>
    </nav>
  )
}

export default Navbar