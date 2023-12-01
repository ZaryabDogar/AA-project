import Section from "./Section";
import { Link } from "react-router-dom";

const Revenue = () => {
  const features = [
    {
      img: "/revenue1.png",
      title: "Customer retention on autopilot",
      desc: "Empower GTM, account teams and end users with personalized insights to minimize churn and expand product adoption",
    },
    {
      img: "/revenue2.png",
      title: "User-Friendly Interface",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus, magna vitae scelerisque vulputate,Lorem ipsum dolor ",
    },
    {
      img: "/revenue3.png",
      title: "Fernet Cipher Encryption",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus, magna vitae scelerisque vulputate,Lorem ipsum dolor ",
    },
    {
      img: "/revenue4.png",
      title: "Versatility Across File Formats",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus, magna vitae scelerisque vulputate,Lorem ipsum dolor ",
    },
  ];

  return (
    <Section>
      <div className="font-nunito py-14 space-y-7 ">
        <h2 className="font-[800] text-center xl:w-[40%] lg:w-[60%] w-full mx-auto sm:text-4xl text-[26px] sm:leading-[49.1px] text-white px-3">
          Automate software revenue management without any code
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
      <div className="font-nunito text-center py-14 px-5 pb-28">
        <h2 className="font-[800] xl:w-[50%] lg:w-[60%] w-full mx-auto sm:text-4xl text-[26px] sm:leading-[49.1px] text-white">
          Ready to experience the next frontier in multimedia data security?
        </h2>
        <p className="text-[1.25rem] lg:w-[58%] w-full py-8 mx-auto leading-[25px] text-[#F5F5F5]">
          Download Stegsec now and explore the possibilities of hidden
          communication, secure file sharing, and discreet information storage.
          Protect your sensitive data with Stegsec – where innovation meets
          responsibility.
        </p>
        <Link to="/signup">
          <button className="font-[700] bg-major px-8 py-4 text-[white]">
            Sign up
          </button>
        </Link>
      </div>
    </Section>
  );
};

export default Revenue;
