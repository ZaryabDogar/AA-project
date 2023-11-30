import { Link } from "react-router-dom";

const Login = () => {
	return (
		<section className="md:h-[110vh] pt-20 md:bg-[url('/mainbg.png')] bg-center  bg-no-repeat xl:bg-[length:40%]  lg:bg-[length:70%] bg-[length:80%] bg-darkgreen">
			<div className="text-black lg:p-20 lg:pb-10 sm:p-10 p-5  flex md:justify-between md:flex-row flex-col justify-center md:items-start">
				{/* text  */}
				<div className="flex flex-col lg:space-y-10 space-y-5 xl:w-[55%] text-center md:text-start ">
					<p className="font-[900] lg:text-[40px] md:text-[30px] sm:text-[40px] text-[25px]  lg:leading-[60px] leading-[40px] text-white font-jost">
					Welcome to StegSec a powerful tool designed to discretely hide and retrieve sensitive data within multimedia files.
					</p>
					<p className="font-jost font-[500] sm:text-[18px] text-[14px] leading-[27.7px] text-[#F5F5F5] md:w-[70%]">
					Using advanced techniques like LSB (Least Significant Bit) and Fernet cipher encryption, your data is securely hidden or extracted.
					</p>
				</div>
				{/* img for small screen  */}

        <div className="md:hidden  ">
          <img src="/mainbg1.png" alt="" />
        </div>
				<div className="flex flex-col justify-center items-center space-y-4   mt-16">
					<div className="">
						<input
							type="email"
							name="email"
							id=""
							placeholder="Enter Email"
							className="appearance-none outline-none bg-input placeholder-shown:font-nunito placeholder-shown:font-[400] placeholder-shown:text-[18px] 
							placeholder-shown:text-[#4B4B4B] placeholder-shown:leading-[27px] xl:w-[500px] w-[280px]   py-3 px-4"
						/>
					</div>
					<div className="">
						<input
							type="password"
							name="password"
							id=""
							placeholder="Password"
							className="appearance-none outline-none bg-input placeholder-shown:font-nunito placeholder-shown:font-[400] placeholder-shown:text-[18px] placeholder-shown:leading-[27px] xl:w-[500px] w-[280px] py-3 px-4"
						/>
					</div>

          {/* <div className="flex w-full  xl:justify-end  justify-center">
            <Link to='#'><p className=" ">Forget Password?</p></Link>
          </div> */}
          <div className="flex items-center  text-[18px]  space-y-6 justify-center xl:p-20 xl:pb-0 sm:p-10 p-5  flex-col">
						<Link to="/login">
							<button className="font-[700] bg-major  md:px-28 px-12 py-4 text-btntext font-jost">
								Login
							</button>
						</Link>
						<Link to="/signup">
							<button className="text-white font-bold font-jost">Create Account</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
