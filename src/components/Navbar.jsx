import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ scrolling }) => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();
	const navigate = useNavigate(); // Use useNavigate instead of useHistory

	useEffect(() => {
		// Close the dropdown menu when the route changes
		setIsOpen(false);
	}, [location]);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const isHome = location.pathname === '/';
	const isdashboard = location.pathname === '/dashboard';
	const navBg = isHome? scrolling ? 'bg-darkgreen text-white' : 'bg-transparent ':'bg-darkgreen';
	
	const navPosition = isHome ? 'sm:fixed' : 'sticky';
	const notdashboard=!isdashboard?"":" text-white"

	return (
		<nav
			className={`${navBg} font-jost w-full  top-0 z-50 ${navPosition} ${notdashboard}`}
		>
			<div className="flex items-center justify-between w-full xl:pr-24 pr-6">
				{/* img  */}
				<div className="flex sm:pl-8">
					<img
						src="/logo.png"
						alt=""
						className="xl:w-full sm:w-[200px] w-[160px]"
					/>
				</div>
				{/* content  */}
				<div className="sm:flex hidden">
					<div className="flex ">
						<ul className={`decoration-transparent font-jost flex items-center justify-center  text-[18px] md:space-x-20 space-x-6  ${navBg } ${notdashboard}  text-white`}>
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
			{!isdashboard&&(	<div className="flex  text-[18px] md:space-x-12 space-x-3 items-center">
					<div className="sm:flex items-center hidden text-[18px] md:space-x-12 space-x-3 ">
						<Link to="/login">
							<button className={`bg-inputBg px-8 py-4 text-major font-jost font-bold`} >Login</button>
						</Link>
						<Link to="/signup">
							<button className="font-[700] bg-major  px-8 py-4 text-btntext">
								Signup
							</button>
						</Link>
					</div>
					
				</div>)}

				{/* img on navbar  */}
				{isdashboard&&(
					<div className="bg-navtext sm:block hidden   rounded-full">
						<img src="/dashbpard.png" alt="" />
					</div>
				)}
				<button
						type="button"
						className={`  font-medium text-4xl  px-2 py-2 text-center  sm:hidden block text-white`}
						onClick={toggleDropdown}
					>
						<RxHamburgerMenu />
					</button>
			</div>
			{/* responsive  */}
			{isOpen && (
				<div className="w-[100vw]  p-5 pt-11 bg-darkgreen shadow-xl absolute top-30 border-1">
					<ul className="font-bold text-gray-600 flex flex-col w-full justify-center text-center items-center space-y-4 text-2xl text-white">
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
							{/* buttons */}
			{!isdashboard&&(	<div className="flex  text-[18px]  items-center justify-center mt-5">
					<div className="flex items-center  text-[18px]  justify-center space-x-12 ">
					<Link to="/login">
							<button className={`bg-inputBg px-8 py-4 text-major font-jost font-bold`} >Login</button>
						</Link>
						<Link to="/signup">
							<button className="font-[700] bg-major  px-8 py-4 text-btntext">
								Signup
							</button>
						</Link>
					</div>
					
				</div>)}

					{/* img on navbar  */}
					{isdashboard&&(
					<div className=" flex  items-center justify-center pt-20">
						<div className="bg-navtext  rounded-full">
						<img src="/dashbpard.png" alt="" />
						
						</div>
					</div>
				)}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
