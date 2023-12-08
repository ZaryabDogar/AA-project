import  { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useLocation,  } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
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
	const isprice =location.pathname==='/pricing'
	const navBg = isHome
		? scrolling
			? 'bg-[#000000] text-white'
			: ''
		: 'bg-[#000000]';

	// const navPosition = isHome ? 'fixed bg-transparent  ' : 'sticky';
	// const notdashboard = !isdashboard ? '' : ' text-white';

	return (
		<nav
			className={`${navBg} bg-[#000000] text-white font-jost w-full   $ `}
		>
			<div className={`flex items-center justify-between w-full xl:pr-28 md:pr-12 pr-6 `}>
				{/* img  */}
				<div className="flex md:pl-6">
					<img
						src="/logo.png"
						alt=""
						className=" md:w-[214px] sm:w-[160px] w-[100px] pt-2 pl-3 sm:pt-0 sm:pl-3"
					/>
				</div>
				{/* content  */}
				{/* {!isHome&&(<div className="sm:flex hidden">
					<div className="flex ">
						<ul
							className={`decoration-transparent font-jost flex items-center justify-center  text-[18px] md:space-x-20 space-x-6  ${navBg}   text-white`}
						>
							<Link to="/">
								<li className=" font-[500]">Home</li>
							</Link>
							<Link to="/pricing">
								<li className="">Pricing</li>
							</Link>
						</ul>
					</div>
				</div>)} */}
				{/* buttons */}
				
					<div className="sm:flex  hidden  text-[18px] lg:space-x-14 space-x-3 items-center">
						<div className="sm:flex hidden">
					<div className="flex ">
						<ul
							className={`decoration-transparent font-jost flex items-center justify-center  text-[18px] lg:space-x-14 space-x-3  ${navBg}   text-white`}
						>
							<Link to="/">
								<li className={`${isHome?'font-[500]':'font-normal'} `}>Home</li>
							</Link>
							<Link to="/pricing">
								<li className={`${isprice?'font-[500]':'font-normal'} `}>Pricing</li>
							</Link>
						</ul>
					</div>
				</div>
						<div className={`flex items-centertext-[18px]  lg:space-x-14 space-x-5 lg:pr-0 pr-3   `}>
							<Link to="/login">
								<button
									className={`bg-white/10 md:px-9 md:py-3 px-4 py-2  text-white font-jost font-[500] rounded-[40px]`}
								>
									Login
								</button>
							</Link>
							<Link to="/signup">
								<button className="font-[700] bg-gradient-to-r from-[#2C3532] via-[#106466] to-[#2C3532]   md:px-7 md:py-3 px-4 py-2  text-btntext rounded-[40px]">
									Signup
								</button>
							</Link>
						</div>
					</div>
				

				{/* img on navbar  */}
				
			{!isOpen&&(	<button
					type="button"
					className={`  font-medium text-3xl  px-2 py-2 text-center  focus:outline-none sm:hidden block text-white`}
					onClick={toggleDropdown}
				>
					<RxHamburgerMenu />
				</button>)}
			{isOpen&&(	<button
					type="button"
					className={`  font-medium text-3xl  px-2 py-2 text-center  focus:outline-none sm:hidden block text-white`}
					onClick={toggleDropdown}
				>
					<RxCross2 />
				</button>)}
			</div>
			{/* responsive  */}
			
				<div className={`w-full  p-5 pb-28 pt-11 bg-[#000000] shadow-xl absolute top-[50px] border-1 transition-all ease-in-out duration-700 z-50  ${isOpen?'translate-y-0' :'-translate-y-[100vh]'}`}>
					<ul className="font-bold text-gray-600 flex flex-col w-full justify-center text-center items-center space-y-4 text-sm text-white">
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
					
						<div className="flex  text-[18px]  items-center justify-center mt-5">
							<div className="flex items-center  text-[18px]  justify-center space-x-8 ">
							<Link to="/login">
								<button
									className={`bg-white/10 px-6 py-2   text-white font-jost font-[500] rounded-[40px]`}
								>
									Login
								</button>
							</Link>
							<Link to="/signup">
								<button className="font-[700] bg-gradient-to-r from-[#2C3532] via-[#106466] to-[#2C3532]   px-5 py-2   text-btntext rounded-[40px]">
									Signup
								</button>
							</Link>
							</div>
						</div>
				

				
				</div>
		
		</nav>
	);
};

export default Navbar;
