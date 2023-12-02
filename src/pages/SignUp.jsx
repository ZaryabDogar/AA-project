import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<section className="md:min-h-[1000px]  pt-0 md:bg-[url('/mainbg.png')] bg-center  bg-no-repeat xl:bg-[length:85%]  lg:bg-[length:70%] bg-[length:80%] bg-[#000000]">
			<div className="text-black lg:p-20 lg:pt-12 sm:p-10 p-5  flex md:justify-between md:flex-row flex-col justify-center md:items-start">
				{/* text  */}
				<div className="flex flex-col lg:space-y-8 space-y-5 lg:w-[52%] text-center md:text-start items-start">
					<p className="font-[900] lg:text-[40px] md:text-[30px] sm:text-[40px] text-[25px]  lg:leading-[60px] leading-[50px] text-white font-nunito  lg:pt-0 pt-10">
						Stegsec Making Human Sense of Data Security, Visualize it, Hear it,
						Steg It
					</p>
					<p className="font-jost font-[500] sm:text-[18px] text-[14px] leading-[27.7px] text-[#F5F5F5] md:w-[80%] lg:w-[70%]">
						Using advanced techniques like LSB (Least Significant Bit) and
						Fernet cipher encryption, your data is securely hidden or extracted.
					</p>
				</div>
				{/* img for small screen  */}

        <div className="md:hidden  ">
          <img src="/mainbg1.png" alt="" />
        </div>
				<div className="flex flex-col justify-center items-center space-y-4 mt-8">
					<div className="">
						<input
							type="email"
							name="email"
							id=""
							placeholder="Enter Email"
							className="appearance-none outline-none bg-input placeholder-shown:font-nunito placeholder-shown:font-[400] placeholder-shown:text-[18px] placeholder-shown:leading-[27px] xl:w-[500px] xl:h-[68px] rounded-[49px] md:w-[300px] w-full   py-3 px-4"
						/>
					</div>
					<div className="">
						<input
							type="password"
							name="password"
							id=""
							placeholder="Password"
							className="appearance-none outline-none bg-input placeholder-shown:font-nunito placeholder-shown:font-[400] placeholder-shown:text-[18px] placeholder-shown:leading-[27px] xl:w-[500px] md:w-[300px] xl:h-[68px] rounded-[49px] w-full py-3 px-4"
						/>
					</div>
					<div className="">
						<input
							type="password"
							name="password"
							id=""
							placeholder="Confirm Password"
							className="appearance-none outline-none bg-input placeholder-shown:font-nunito placeholder-shown:font-[400] placeholder-shown:text-[18px] placeholder-shown:leading-[27px] xl:w-[500px] md:w-[300px] xl:h-[68px] rounded-[49px] w-full  py-3 px-4"
						/>
					</div>

       
          <div className="flex items-center  text-[18px] space-y-3 justify-center  sm:p-10 p-5  flex-col">
						<Link to="/signup">
							<button className="font-[700] bg-major  md:px-28 px-12 py-4 text-btntext font-jost rounded-[40px]">
              Signup
							</button>
						</Link>
						<Link to="/login">
							<button className="text-[#F5F5F5]  font-bold font-jost">Login</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
