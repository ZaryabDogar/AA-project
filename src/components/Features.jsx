import Section from "./Section";

const Features = () => {
  return (
    <div className="  py-8 px-5">
      <Section>
        <div className="lg:space-y-44 space-y-16 flex flex-col  xl:px-28">
          <div className="flex lg:flex-row flex-col w-full font-nunito items-center justify-between gap-y-8 lg:space-x-12 space-y-10">
            {/* Left Text */}
            <div className="w-full lg:w-[45%] lg:pl-  lg:text-start text-center">
              <h2 className="font-[900] sm:text-[2.125rem]  lg:text-[2.5rem] text-[26px] sm:leading-[42.5px] text-white ">
              AI & Layered Encryption
              </h2>
              <p className="text-[1.125rem] pt-3 pb-8 text-[#F5F5F5] sm:leading-[22.5px] leading-[18px] lg:w-[80%]">
              Take your data security a step further.  Stegsec employs AI and a series algorithms to conceal data.
              </p>
            </div>
            {/* Right Image */}
            <div className="relative   lg:w-[604px] sm:w-[50%] w-[70%]">
              <img src="/spec-1.png" alt="" />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col-reverse w-full font-nunito items-center justify-between gap-8 lg:space-x-12 space-y-10">
            {/* Left Image */}
            <div className="relative sm:w-[50%] w-[70%] -translate-y-[20%]">
              <img src="/spec-2.png" className="w-[503px]" alt="" />
            </div>
            {/* Right Text */}
            <div className="lg:w-[50%] w-full lg:mt-0 mb-16 lg:text-start text-center">
              <h2 className="font-[900] sm:text-[2.125rem]  lg:text-[2.5rem] text-[26px] sm:leading-[42.5px] text-white">
              Cross-Format Compatibility
              </h2>
              <p className="text-[1.125rem] pt-3 pb-8 text-[#F5F5F5] sm:leading-[22.5px] leading-[18px] lg:mb-0 mb-16">
              Stegsec is designed to work with several multimedia formats which  includes image, audio & video. Whether you're safeguarding confidential documents or encrypting a crucial message, Stegsec supports your diverse needs while maintaining top-tier data security
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Features;
