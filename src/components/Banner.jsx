import { IoMdMail } from "react-icons/io";

const Banner = () => {
  return (
    <div className="font-jost sm:pl-8  md:pt-32 pt-20 sm:pb-24 pb-6  w-full xl:bg-[length:85%]  lg:bg-[length:100%] bg-[length:100%] flex  justify-end 
    md:flex-row flex-col relative  ">
      <div className=" w-full block md:hidden pt-20 sm:px-0 px-4">
        {/* Main Heading */}
        <div className="w-full pb-4 md:text-start text-center ">
          <h1 className=" font-nunito font-[900] text-white lg:text-[2.5rem] text-[26px] sm:leading-[50px] py-2">
          Stegsec Making Human Sense of Data Security, See It it, Hear it, Steg It
          </h1>
          <p className="sm:text-[1.125rem]  md:text-start text-center text-white leading-[22.5px]">
          Stegsec: Elevating data security with multiple layers
          </p>
        </div>
        <h3 className="font-medium sm:text-[1.125rem]  md:text-start text-center leading-[27.72px] text-white pb-12">
        Stegsec combines the use of AI for premium users enabling them to define images and securely hide their content.  {" "}
        </h3>
        {/* <div className="flex sm:flex-row flex-col gap-y-3 sm:items-center w-full">
          <div className="flex gap-x-3 items-center bg-inputBg sm:w-[70%] w-full p-3">
            <IoMdMail className="text-[25.38px] text-lightBrown" />
            <input
              type="email"
              placeholder="Your Company Email"
              name="email"
              className="w-full bg-inputBg outline-none border-none text-inputText leading-[23.26px] text-[16.09px]"
            />
          </div>
          <button className="bg-major text-[white] text-[16.09px] leading-[23.26px] sm:w-[30%] w-[60%] py-3">
            Get Early Access
          </button>
        </div> */}
      </div>
      
      <div className="md:block ">
        <img src="/banner.png" alt="" className="w-full" />
      </div>
 
      <div className="xl:w-[42%] lg:w-[55%] md:w-[50%] sm:w-[55%] w-full absolute  lg:top-72 top-60 lg:left-20 left-5 md:block hidden">
        {/* Main Heading */}
        <div className="w-full pb-4 md:text-start text-center ">
          <h1 className=" font-nunito font-[900] text-white lg:text-[2.5rem] text-[30px] sm:leading-[50px] py-2">
          Stegsec Making Human Sense of Data Security, Visualize it, Hear it, Steg It
          </h1>
          <p className="sm:text-[1.125rem] text-sm md:text-start text-center text-white leading-[22.5px]">
            Stegsec: Elevating data security with multiple layers
          </p>
        </div>
        <h3 className="font-medium sm:text-[1.125rem] text-sm md:text-start text-center leading-[27.72px] text-white pb-12">
          Stegsec combines the use of AI for premium users enabling them to
          define images and securely hide their content.{" "}
        </h3>
        {/* <div className="flex sm:flex-row flex-col gap-y-3 sm:items-center w-full">
          <div className="flex gap-x-3 items-center bg-inputBg sm:w-[70%] w-full p-3">
            <IoMdMail className="text-[25.38px] text-lightBrown" />
            <input
              type="email"
              placeholder="Your Company Email"
              name="email"
              className="w-full bg-inputBg outline-none border-none text-inputText leading-[23.26px] text-[16.09px]"
            />
          </div>
          <button className="bg-major text-[white] text-[16.09px] leading-[23.26px] sm:w-[30%] w-[60%] py-3">
            Get Early Access
          </button>
        </div> */}
      </div>

    </div>
  );
};

export default Banner;
