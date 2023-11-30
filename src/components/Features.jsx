import Section from "./Section";

const Features = () => {
  return (
    <div className=" bg-bgBlue py-8">
      <Section>
        <div className="sm:space-y-0 space-y-6">
          <div className="flex lg:flex-row flex-col w-full font-nunito items-center justify-center gap-y-8">
            {/* Left Text */}
            <div className="lg:w-[45%] w-full">
              <h2 className="font-[900] sm:text-[2.125rem] text-3xl sm:leading-[42.5px] text-major">
                Fernet Cipher Encryption
              </h2>
              <p className="text-[1.125rem] pt-3 pb-8 text-navtext leading-[22.5px]">
                Take your data security a step further with Fernet cipher
                encryption. Stegsec employs this symmetric key encryption
                algorithm, providing an additional layer of protection to your
                concealed data. Feel confident that your information is not only
                hidden but also shielded by robust encryption.
              </p>
            </div>
            {/* Right Image */}
            <div className="relative sm:w-[50%] w-[70%]">
              <img src="/spec-1.png" alt="" />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col-reverse w-full font-nunito items-center justify-center gap-8">
            {/* Left Image */}
            <div className="relative sm:w-[50%] w-[70%] -translate-y-[20%]">
              <img src="/spec-2.png" alt="" />
            </div>
            {/* Right Text */}
            <div className="lg:w-[45%] w-full">
              <h2 className="font-[900] sm:text-[2.125rem] text-3xl sm:leading-[42.5px] text-major">
                Cross-Format Compatibility
              </h2>
              <p className="text-[1.125rem] pt-3 pb-8 text-navtext leading-[22.5px]">
                Stegsec is designed to work with various multimedia formats,
                including images, audio, and video files. Whether you&apos;re
                safeguarding a confidential document or encrypting a crucial
                audio message, Stegsec supports your diverse needs while
                maintaining top-tier data security.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Features;
