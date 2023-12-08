import { Link, useLocation,  } from 'react-router-dom';
import Section from "./Section";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { PiPhoneFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  const iconStyle = "text-[25.54px]";

  const contactIcons = "text-[22.54px]";

  const social_links = [
    {
      icon: <FaFacebookF className={iconStyle} />,
      link: "#",
    },
    {
      icon: <FaTwitter className={iconStyle} />,
      link: "#",
    },
    {
      icon: <FaLinkedinIn className={iconStyle} />,
      link: "#",
    },
    {
      icon: <FaInstagram className={iconStyle} />,
      link: "#",
    },
  ];

  const specialLinks = [
    {
      title: "Pages",
      links: [
        { title: "Home", link: "/" },
        { title: "Pricing", link: "/pricing" },
        { title: "Blog", link: "#" },
        { title: "Demo", link: "/dashboard" },
      ],
    },
  
  ];

  const contactlist = [
    {
      icon: <PiPhoneFill className={contactIcons} />,
      content: "+1 512.549.2838",
    },
    {
      icon: <IoMdMail className={contactIcons} />,
      content: "info@stegsec.com",
    },
    {
      icon: <FaLocationDot className={contactIcons} />,
      content:
        "9442 Capital of Texas Hwy Bldg 1, STE 500 Austin, TX 78759",
    },
  ];

  return (
    <Section className=" ">
      <ul className={`flex flex-wrap lg:flex-row flex-col lg:items-start lg:justify-between justify-center gap-y-8 font-roboto text-white lg:pt-32 pt-7 lg:pb-8 pb-4  xl:px-20 px-5 bg-[#000000]`}>
        
        <li className="lg:block lg:w-auto w-full flex flex-col  items-center justify-between">
          <img src="/logo.png" alt="Logo" className="lg:w-full w-[55%]" />
          <div className="social_links flex items-center justify-around p-4 lg:w-auto w-[45%] lg:gap-0 gap-2">
            {social_links.map((link, i) => (
              <Link key={i} to={`${link.link}`}>
                {link.icon}
              </Link>
            ))}
          </div>
        </li>
       
        {specialLinks.map((link, i) => (
          <li key={i}>
            <h3 className="font-bold text-[21.01px] leading-[24.62px] pb-8">
              {link.title}
            </h3>
            <ul className="flex lg:flex-col flex-row items-start gap-4">
              {link.links.map((item, i) => (
                <li key={i}>
                  <Link
                    to={`${item.link}`}
                    className="text-[16.34px] leading-[19.15px]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li>
          <h3 className="font-bold text-[21.01px] leading-[24.62px] pb-8">
            Contact
          </h3>
          <ul className="flex flex-col items-start gap-y-4">
            {contactlist.map((contact, i) => (
              <li
                className="flex last:items-start items-center gap-x-2"
                key={i}
              >
                {contact.icon}
                <p className="text-[16.34px] leading-[19.15px] last:leading-[28.02px] lg:w-[350px] w-full">
                  {contact.content}
                </p>
              </li>
            ))}
          </ul>
        </li>
        <li className=""></li>
      </ul>
    </Section>
  );
};

export default Footer;
