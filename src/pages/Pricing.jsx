import { useState } from "react"
import { IoMdCheckmark } from "react-icons/io";
import { Link } from "react-router-dom";
const Pricing = () => {
const [mousehover, setmousehover] = useState(false)
const mouseover=()=>{
     setmousehover(true)
  
}
const mouseleave=()=>{
     setmousehover(false)

}
  return (
    <section className="bg-[#000000]">
  <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:pb-32  xl:px-36 ">
      <div className="mx-auto max-w-screen-md text-center mb-12 lg:mb-12">
          <h2 className="mb-4 text-[32px] font-bold font-jost text-white leading-[46.24px]">Pricing</h2>
          <p className="mb-5 font-[300] text-[16px] font-jost leading-[30px] text-[#F5F5F5]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
      </div>
      <div className="space-y-12 md:grid lg:grid-cols-3 gap-12 md:grid-cols-2   px-8  lg:space-y-0 flex justify-center  items-center flex-wrap ">
           {/* card 1  */}
          <div className="mt-12 lg:mt-0 flex flex-col p-3   max-w-sm md:min-w-[0px]  sm:min-w-[384px] text-center  shadow-lg bg-[#106466] hover:border hover:border-[#106466] hover:shadow-md lg:border-0 border border-[#106466] [0_35px_60px_-15px_#3CCF8E1A] relative overflow-hidden transition-transform transform-gpu duration-100 lg:hover:scale-y-[1.035] cursor-pointer hover:z-10 rounded-2xl md:h-[550px] 2xl:h-[640px] 2xl:h-[] " >
              <h3 className=" text-start text-[16.71px] 2xl:text-[19.71px] font-extrabold font-inter capitalize text-white ">7 day free trial</h3>
             
              <div className="flex  items-baseline mb-8 ">
                  <h3 className="text-[#FFFFFF] font-inter  text-start text-[30.50px] 2xl:text-[37.85px] font-extrabold capitalize">$0.00</h3>
              
              </div>
              <p className="font-roboto font-bold text-sm  text-white text-start ">Free account:</p>
              <ul role="list" className="my-2 space-y-[5px] 2xl:space-y-3 text-left font-roboto">
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className="  text-[13.14px] tracking-[0.41px]   leading-[20.23px] text-[#E9E9E9] font-roboto">Hide media types: Text, Word, Excel,</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Hide in images (JPEG, PNG)</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]   leading-[20.23px] text-[#E9E9E9] font-roboto">1 MB Hidden File Size Limit</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className="  text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Encrypt hidden file</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Password Protect</span>
                  </li>
                
              </ul>
              <div className=" py-5 flex h-full w-full justify-center items-end lg:py-0">
           <Link to="/signup">
								<button className="font-[700] bg-gradient-to-r from-[#2C3532] via-[#106466] to-[#2C3532]   px-8 py-3   text-btntext rounded-[40px]">
									Signup
								</button>
							</Link></div>
          </div>
           {/* card 2  */}
          <div className="mt-12 lg:mt-0 flex flex-col p-3   max-w-sm text-center  shadow-lg bg-[#106466] hover:border hover:border-[#106466] hover:shadow-md lg:border-0 border border-[#106466] [0_35px_60px_-15px_#3CCF8E1A] relative overflow-hidden transition-transform transform-gpu duration-100 lg:hover:scale-y-[1.035] cursor-pointer hover:z-10 rounded-2xl md:h-[550px] 2xl:h-[640px] 2xl:h-[] md:min-w-[0px]  sm:min-w-[384px] sm:w-full w-[290px] " >
              <h3 className=" text-start text-[16.71px] 2xl:text-[19.71px] font-extrabold font-inter capitalize text-white ">Monthly</h3>
             
              <div className="flex  items-baseline mb-8 ">
                  <h3 className="text-[#FFFFFF] font-inter  text-start text-[30.50px] 2xl:text-[37.85px] font-extrabold capitalize">$11.95</h3>
              
              </div>
              <p className="font-roboto font-bold text-sm  text-white text-start ">Monthly</p>
              <ul role="list" className="my-2 space-y-[5px] 2xl:space-y-3 text-left font-roboto ">
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className="  text-[13.14px] tracking-[0.41px]   leading-[20.23px] text-[#E9E9E9] font-roboto">Hide media types: Text, Word, Excel,</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Hide in images (JPEG, PNG)</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]   leading-[20.23px] text-[#E9E9E9] font-roboto">No Hidden File Size Limit</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className="  text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Encrypt hidden file</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Password Protect</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Hide in Audio (MP3, Wav)</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Hide in Video (AVI)</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[24px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Use of your own Images, Audio and Video) files to hide in</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Access to Al Generated Image files to hide in</span>
                  </li>
                
              </ul>
              <div className=" py-5 flex h-full w-full justify-center items-end lg:py-0">
           <Link to="/signup">
								<button className="font-[700] bg-gradient-to-r from-[#2C3532] via-[#106466] to-[#2C3532]   px-8 py-3   text-btntext rounded-[40px]">
									Signup
								</button>
							</Link></div>
          </div>
     
           {/* card 3  */}
          <div className="mt-12 lg:mt-0 flex flex-col p-3   max-w-sm text-center  shadow-lg bg-[#106466] hover:border hover:border-[#106466] hover:shadow-md lg:border-0 border border-[#106466] [0_35px_60px_-15px_#3CCF8E1A] relative overflow-hidden transition-transform transform-gpu duration-100 lg:hover:scale-y-[1.035] cursor-pointer hover:z-10 rounded-2xl md:h-[550px] 2xl:h-[640px]  md:min-w-[0px]  sm:min-w-[384px] sm:w-full w-[290px]" >
              <h3 className=" text-start text-[16.71px] 2xl:text-[19.71px] font-extrabold font-inter capitalize text-white ">Annual</h3>
             
              <div className="flex  items-baseline mb-8 flex-col">
                  <h3 className="text-[#FFFFFF] font-inter  text-start text-[30.50px] 2xl:text-[37.85px] font-extrabold capitalize">$59.95  </h3>
              <p className="font-semibold font-roboto text-[13.14px] leading-[19.71px] text-white">Save 58%</p>
              </div>
              <p className="font-roboto font-bold text-sm  text-white text-start ">Yearly</p>
              <ul role="list" className="my-2 space-y-[5px] 2xl:space-y-3 text-left font-roboto ">
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className="  text-[13.14px] tracking-[0.41px]   leading-[20.23px] text-[#E9E9E9] font-roboto">Hide media types: Text, Word, Excel,</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Hide in images (JPEG, PNG)</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]   leading-[20.23px] text-[#E9E9E9] font-roboto">No Hidden File Size Limit</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className="  text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Encrypt hidden file</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Password Protect</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Hide in Audio (MP3, Wav)</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Hide in Video (AVI)</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[24px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Use of your own Images, Audio and Video) files to hide in</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Access to Al Generated Image files to hide in</span>
                  </li>
                  <li className="flex space-x-3 items-center w-full text-white text-start font-roboto">
                     
                  <IoMdCheckmark className="text-[18px] " />
                      <span className=" text-[13.14px] tracking-[0.41px]  leading-[20.23px] text-[#E9E9E9] font-roboto">Access to Al Generated Phrases Categories</span>
                  </li>
                
              </ul>
              <div className=" py-5 flex h-full w-full justify-center items-end lg:py-0">
           <Link to="/signup">
								<button className="font-[700] bg-gradient-to-r from-[#2C3532] via-[#106466] to-[#2C3532]   px-8 py-3   text-btntext rounded-[40px]">
									Signup
								</button>
							</Link></div>
          </div>
     

          {/* card 2  */}
          {/* <div className="flex flex-col p-6   max-w-sm text-center  shadow-lg bg-[#106466] hover:border hover:border-[#106466] hover:shadow-md[0_35px_60px_-15px_#3CCF8E1A] relative overflow-hidden transition-transform transform-gpu duration-100 lg:hover:scale-y-[1.035] h-fit cursor-pointer hover:z-10 rounded-2xl" onMouseEnter={mouseover} onMouseLeave={mouseleave}>
              <h3 className="mb-1 text-[14px] font-extrabold font-jost capitalize">Silver</h3>
             
              <div className="flex justify-center items-baseline mb-8 px-10 lg:px-0">
                  <h3 className="text-[#8F8A8A] font-jost text-[16px]capitalize">$<span className="text-[#2E2E2E] font-[600] xl:text-[30px] text-[25px] ">199.99</span>/1 year</h3>
              
              </div>
            
              <ul role="list" className="mb-5 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                     
                      <img src="/pricing.png" alt="" />
                      <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">Detail Page</span>
                  </li>
                  <li className="flex items-center space-x-3">
                     
                       <img src="/pricing.png" alt="" />
                       <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">Ratings and Reviews</span>
                  </li>
                  <li className="flex items-center space-x-3">
                     
                       <img src="/pricing.png" alt="" />
                       <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">E-mail</span>
                  </li>
                  <li className="flex items-center space-x-3">
                     
                       <img src="/pricing.png" alt="" />
                       <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">Url</span>
                  </li>
                  <li className="flex items-center space-x-3">
                     
                       <img src="/pricing.png" alt="" />
                       <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">Phone</span>
                  </li>
                  <li className="flex items-center space-x-3">
                     
                       <img src="/pricing.png" alt="" />
                       <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">Additional Phone</span>
                  </li>
                  <li className="font-[600 ] text-sm font-jost leading-[20.23px]">Read More</li>
              </ul>
              <a href="#" className=" border-[1px] border-[#8F8A8A]  px-5 py-2.5 font-[600] text-sm text-[#8F8A8A]">Start Today</a>
          </div> */}

          {/* card 3 */}
          {/* <div className={`flex flex-col p-6 pt-4  max-w-sm text-center  shadow-lg bg-[#106466]  hover:shadow-md  [0_35px_60px_-15px_#3CCF8E1A] relative overflow-hidden transition-transform transform-gpu duration-100  h-fit cursor-pointer z-10 ${mousehover?'':'lg:scale-y-110  border border-[#106466]'}`}>
            <div className=" text-center flex justify-center mb-4">
            <p className=" font-jost  text-[12px] bg-[#D8B08C] text-[#FFFFFF] px-[10px] ">Recommended</p></div>
              <h3 className="mb-1 text-[14px] font-semibold font-jost capitalize">Gold</h3>
             
              <div className="flex justify-center items-baseline mb-8 px-10 lg:px-0">
                  <h3 className="text-[#8F8A8A] font-jost text-[16px]capitalize">$<span className="text-[#2E2E2E] font-[600] xl:text-[30px] text-[25px] ">349.99</span>/2 year</h3>
              
              </div>
            
              <ul role="list" className="mb-5 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                     
                      <img src="/pricing.png" alt="" />
                      <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">Detail Page</span>
                  </li>
                  <li className="flex items-center space-x-3">
                     
                       <img src="/pricing.png" alt="" />
                       <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">Ratings and Reviews</span>
                  </li>
                  <li className="flex items-center space-x-3">
                     
                       <img src="/pricing.png" alt="" />
                       <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">E-mail</span>
                  </li>
                  <li className="flex items-center space-x-3">
                     
                       <img src="/pricing.png" alt="" />
                       <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">Url</span>
                  </li>
                  <li className="flex items-center space-x-3">
                     
                       <img src="/pricing.png" alt="" />
                       <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">Phone</span>
                  </li>
                  <li className="flex items-center space-x-3">
                     
                       <img src="/pricing.png" alt="" />
                       <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">Additional Phone</span>
                  </li>
                  <li className="font-[600 ] text-sm font-jost leading-[20.23px]">Read More</li>
              </ul>
              <a href="#" className=" border-[1px] border-[#8F8A8A]  px-5 py-2.5 font-[600] text-sm text-[#8F8A8A]">Start Today</a>
          </div> */}

          {/* card 4  */}
          {/* <div className="flex flex-col p-6   max-w-sm text-center  shadow-lg bg-[#106466] hover:border hover:border-[#106466] hover:shadow-md[0_35px_60px_-15px_#3CCF8E1A] relative overflow-hidden transition-transform transform-gpu duration-100 lg:hover:scale-y-[1.035] h-fit cursor-pointer hover:z-10 rounded-2xl" onMouseEnter={mouseover} onMouseLeave={mouseleave}>
              <h3 className="mb-1 text-[14px] font-semibold font-jost capitalize">Diamond</h3>
             
              <div className="flex justify-center items-baseline mb-8 px-10 lg:px-0 ">
                  <h3 className="text-[#8F8A8A] font-jost text-[16px]capitalize">$<span className="text-[#2E2E2E] font-[600] xl:text-[30px] text-[25px] ">544.99</span>/3 year</h3>
              
              </div>
            
              <ul role="list" className="mb-5 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                     
                      <img src="/pricing.png" alt="" />
                      <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">Detail Page</span>
                  </li>
                  <li className="flex items-center space-x-3">
                     
                       <img src="/pricing.png" alt="" />
                       <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">Ratings and Reviews</span>
                  </li>
                  <li className="flex items-center space-x-3">
                     
                       <img src="/pricing.png" alt="" />
                       <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">E-mail</span>
                  </li>
                  <li className="flex items-center space-x-3">
                     
                       <img src="/pricing.png" alt="" />
                       <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">Url</span>
                  </li>
                  <li className="flex items-center space-x-3">
                     
                       <img src="/pricing.png" alt="" />
                       <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">Phone</span>
                  </li>
                  <li className="flex items-center space-x-3">
                     
                       <img src="/pricing.png" alt="" />
                       <span className="font-jost text-[14px] leading-[20.23px] text-[#8F8A8A]">Additional Phone</span>
                  </li>
                  <li className="font-[600 ] text-sm font-jost leading-[20.23px]">Read More</li>
              </ul>
              <a href="#" className=" border-[1px] border-[#8F8A8A]  px-5 py-2.5 font-[600] text-sm text-[#8F8A8A]">Start Today</a>
          </div> */}
       
       
      
       
      
      </div>
  </div>
</section>
  )
}

export default Pricing