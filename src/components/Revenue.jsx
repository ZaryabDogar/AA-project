import Section from "./Section";
import { Link } from "react-router-dom";

const Revenue = () => {
  const features = [
    {
      img: "/revenue1.png",
      title: "Simplifying Data Security",
      desc: "Layered encryption, Complex algorithms and encoding techniques are simplified with Stegsec",
    },
    {
      img: "/revenue2.png",
      title: "Friendly & Fun Interface",
      desc: "Our simple user interface eliminates unnecessary barriers between users and data security. Data security with multimedia take the main stage.",
    },
    {
      img: "/revenue3.png",
      title: "Layered Encryption & AI Integration",
      desc: "Complexity executed on the back end while simplifying the front end.  See it, Hear It Steg It",
    },
    {
      img: "/revenue4.png",
      title: "File Format Versatility",
      desc: "From PDFs to Office documents we have you covered.  See It, hear It Steg It",
    },
  ];

  return (
    <Section>
      <div className="font-nunito py-14 space-y-7 ">
        <h2 className="font-[800] text-center xl:w-[40%] lg:w-[60%] w-full mx-auto sm:text-4xl text-[26px] sm:leading-[49.1px] text-white px-3">
        See It, Hear It, Steg It
        </h2>
        <div className="flex justify-center">
        <div className="py-8 lg:px-14 grid lg:grid-cols-2 grid-cols-1 xl:gap-x-20 gap-x-16 gap-y-10 px-5">
          {features.map((feature, i) => (
            <div
              className="flex lg:flex-row flex-col lg:items-start items-center   gap-4 max-w-lg"
              key={i}
            >
              {/* Image */}
              <img src={feature.img} alt="" />
              <div className="text-white lg:text-left text-center ">
                <h3 className="font-bold text-[1.5rem] leading-[32.74px] ">
                  {feature.title}
                </h3>
                <p className="text-[1.125rem] leading-[24.55px] pt-2">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      <div className="font-nunito text-center py-14 px-5 lg:pb-28 pb-20">
        <h2 className="font-[800] xl:w-[50%] lg:w-[60%] w-full mx-auto sm:text-4xl text-[26px] sm:leading-[49.1px] text-white">
          Ready to experience the next frontier in multimedia data security?
        </h2>
        <p className="text-[1.25rem] lg:w-[58%] w-full py-8 mx-auto leading-[25px] text-[#F5F5F5]">
        Download Stegsec now and explore the possibilities of hidden communication, secure file sharing, and discreet information storage. Protect your sensitive data with Stegsec – where innovation meets responsibility.
        </p>
        <Link to="/signup">
          <button className="font-[700] bg-major px-11 py-3 sm:mt-8 text-[white] rounded-[40px]">
            Sign up
          </button>
        </Link>
      </div>
    </Section>
  );
};

export default Revenue;
