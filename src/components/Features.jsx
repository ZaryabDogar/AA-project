import Section from "./Section";

const Features = () => {
  return (
    <div className=" bg-bgBlue">
      <Section>
        <div className="flex lg:flex-row flex-col-reverse w-full font-nunito items-center justify-around py-14 gap-y-8">
          {/* Left Text */}
          <div className="lg:w-[35%] w-full">
            <h2 className="font-[900] sm:text-[2.125rem] text-3xl sm:leading-[42.5px] text-major">
              Fernet Cipher Encryption
            </h2>
            <p className="text-[1.125rem] pt-3 pb-8 text-lightGrey">
              Take your data security a step further with Fernet cipher
              encryption. Stegsec employs this symmetric key encryption
              algorithm, providing an additional layer of protection to your
              concealed data. Feel confident that your information is not only
              hidden but also shielded by robust encryption.
            </p>
           
          </div>
          {/* Right Image */}
          <div className="relative sm:w-[45%] w-[70%]">
            <img
              src="/security.png"
              alt=""
              className=" bg-[url(/ellipse.png)] bg-contain bg-bottom bg-no-repeat"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Features;
