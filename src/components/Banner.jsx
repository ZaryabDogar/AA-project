import { IoMdMail } from "react-icons/io";

const Banner = () => {
  return (
    <div className="font-jost pl-8 pr-8 sm:pr-0 xl:pl-20 sm:pt-52 pt-6 sm:pb-64 pb-6  w-full sm:bg-[url(/banner.png)] bg-cover bg-center sm:min-h-screen flex flex-col items-start justify-center">
      <div className="xl:w-[40%] lg:w-[60%] sm:w-[75%] w-full">
        {/* Main Heading */}
        <div className="w-full pb-4">
          <h1 className=" font-nunito font-[900] text-major sm:text-[2.5rem] text-3xl sm:leading-[50px] py-2">
            Welcome to StegSec a powerful tool designed to discretely hide and
            retrieve sensitive data within multimedia files.
          </h1>
          <p className="text-[1.125rem] text-lightGrey leading-[22.5px]">
            Stegsec: Elevating data security with multiple layers
          </p>
        </div>
        <h3 className="font-medium text-[1.125rem] leading-[27.72px] text-navtext pb-12">
          Stegsec combines the use of AI for premium users enabling them to
          define images and securely hide their content.{" "}
        </h3>
        <div className="flex sm:flex-row flex-col gap-y-3 sm:items-center w-full">
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
