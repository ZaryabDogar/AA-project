import Section from "./Section";

const DataSecurity = () => {
  return (
    <Section>
      <div className="flex lg:flex-row flex-col-reverse w-full font-nunito items-center lg:justify-around lg:space-x-14 justify-center lg:pt-14 lg:pb-52 py-32 gap-y-24 px-5 lg:px-20">
        {/* Left Image */}
        <div className="relative sm:w-[516px] w-[70%]">
          <img src="/security.png" alt="" className=" bg-[url(/ellipse.png)] bg-contain bg-bottom bg-no-repeat"/>
        </div>
        {/* Right Text */}
        <div className="lg:w-[40%] w-full lg:text-start text-center">
          <h2 className="font-[900] sm:text-[2.125rem]  lg:text-[2.5rem] text-[26px] sm:leading-[42.5px] text-white font-nunito">Stegsec: Elevating Data Security to New Heights</h2>
          <p className="text-[1.125rem] pt-3 pb-8 text-[#F5F5F5] font-nunito leading-[22.5px]">
          Stegsec uses advanced layered encryption techniques along with AI to to hide & extract data.  Our innovative approach to data security simplifies layered encryption for end users
          </p>

        </div>
      </div>
    </Section>
  );
};

export default DataSecurity;
