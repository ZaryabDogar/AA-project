import Section from "./Section";

const DataSecurity = () => {
  return (
    <Section>
      <div className="flex lg:flex-row flex-col-reverse w-full font-nunito items-center justify-around pt-14 pb-52 gap-y-8">
        {/* Left Image */}
        <div className="relative sm:w-[45%] w-[70%]">
          <img src="/security.png" alt="" className=" bg-[url(/ellipse.png)] bg-contain bg-bottom bg-no-repeat"/>
        </div>
        {/* Right Text */}
        <div className="lg:w-[35%] w-full">
          <h2 className="font-[900] sm:text-[2.125rem] text-3xl sm:leading-[42.5px] text-major">Stegsec: Elevating Data Security to New Heights</h2>
          <p className="text-[1.125rem] pt-3 pb-8 text-lightGrey">
            Stegsec uses advanced layered encryption techniques along with AI to
            to hide & extract data. Our innovative approach to data security
            simplifies layered encryption for end users
          </p>
          <button className="bg-lightBrown text-[white] px-8 py-3 font-jost font-bold text-[1.25rem] leading-[28.9px]">Pricing</button>
        </div>
      </div>
    </Section>
  );
};

export default DataSecurity;
