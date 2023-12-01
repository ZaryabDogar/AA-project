import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ scrolling }) => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();
	

	useEffect(() => {
		// Close the dropdown menu when the route changes
		setIsOpen(false);
	}, [location]);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const isHome = location.pathname === '/';
	const isdashboard = location.pathname === '/dashboard';
	const navBg = isHome
		? scrolling
			? 'bg-darkgreen text-white'
			: ''
		: 'bg-darkgreen';

	const navPosition = isHome ? 'fixed bg-transparent  ' : 'sticky';
	const notdashboard = !isdashboard ? '' : ' text-white';

	return (
		<nav
			className={`${navBg} font-jost w-full  top-0 z-50 ${navPosition} ${notdashboard} `}
		>
			<div className={`flex items-center justify-between w-full ${isHome?'xl:pr-28 md:pr-12':'xl:pr-12 pr-6 '}`}>
				{/* img  */}
				<div className="flex md:pl-6">
					<img
						src="/logo.png"
						alt=""
						className="xl:w-full md:w-[214px] sm:w-[160px] w-[100px] pt-2 pl-3 sm:pt-0 sm:pl-3"
					/>
				</div>
				{/* content  */}
				{!isHome&&(<div className="sm:flex hidden">
					<div className="flex ">
						<ul
							className={`decoration-transparent font-jost flex items-center justify-center  text-[18px] md:space-x-20 space-x-6  ${navBg} ${notdashboard}  text-white`}
						>
							<Link to="/">
								<li className=" font-[500]">Home</li>
							</Link>
							<Link to="/pricing">
								<li className="">Pricing</li>
							</Link>
						</ul>
					</div>
				</div>)}
				{/* buttons */}
				{!isdashboard && (
					<div className="sm:flex  hidden  text-[18px] lg:space-x-14 space-x-3 items-center">
						{isHome&&(<div className="sm:flex hidden">
					<div className="flex ">
						<ul
							className={`decoration-transparent font-jost flex items-center justify-center  text-[18px] lg:space-x-14 space-x-3  ${navBg} ${notdashboard}  text-white`}
						>
							<Link to="/">
								<li className=" font-[500]">Home</li>
							</Link>
							<Link to="/pricing">
								<li className="">Pricing</li>
							</Link>
						</ul>
					</div>
				</div>)}
						<div className={`flex items-centertext-[18px]  ${isHome?'lg:space-x-14 space-x-3 lg:pr-0 pr-3':'space-x-2 '} `}>
							<Link to="/login">
								<button
									className={`bg-white/10 md:px-9 md:py-4 px-4 py-2  text-white font-jost font-[500]`}
								>
									Login
								</button>
							</Link>
							<Link to="/signup">
								<button className="font-[700] bg-gradient-to-r from-[#2C3532] via-[#106466] to-[#2C3532]   md:px-9 md:py-4 px-4 py-2  text-btntext">
									Signup
								</button>
							</Link>
						</div>
					</div>
				)}

				{/* img on navbar  */}
				{isdashboard && (
					<div className="bg-navtext sm:block hidden   rounded-full">
						<img src="/dashbpard.png" alt="" />
					</div>
				)}
				<button
					type="button"
					className={`  font-medium text-3xl  px-2 py-2 text-center  sm:hidden block text-white`}
					onClick={toggleDropdown}
				>
					<RxHamburgerMenu />
				</button>
			</div>
			{/* responsive  */}
			{isOpen && (
				<div className="w-[100vw]  p-5 pt-11 bg-darkgreen shadow-xl absolute top-[60px] border-1 ">
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
					{!isdashboard && (
						<div className="flex  text-[18px]  items-center justify-center mt-5">
							<div className="flex items-center  text-[18px]  justify-center space-x-12 ">
								<Link to="/login">
									<button
										className={`bg-inputBg px-8 py-4 text-major font-jost font-bold`}
									>
										Login
									</button>
								</Link>
								<Link to="/signup">
									<button className="font-[700] bg-major  px-8 py-4 text-btntext">
										Signup
									</button>
								</Link>
							</div>
						</div>
					)}

					{/* img on navbar  */}
					{isdashboard && (
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
