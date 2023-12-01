

const ContactForm = () => {
  return (
    <div className="flex flex-col lg:flex-row   bg-[#106466]">
      {/* Image Section */}
      <div className="lg:w-1/2">
        <img
          src="/contact.png"  // Replace with the path to your image
          alt="Contact Us"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 p-8">
        <h2 className="text-[40.2px] font-bold  leading-[54.83px] text-white font-nunito lg:text-start text-center">Contact Us</h2>
        <p className="text-[18.09px] lg:mb-24 mb-20 leading-[24.67px] text-white font-nunito lg:text-start text-center">Any question or remarks? Just write us a message!</p>

        <form className="font-poppins">
          {/* Name Fields */}
          <div className="mb-16 flex flex-col lg:flex-row ">
            <div className="lg:w-1/2 lg:pr-2 mb-14
             lg:mb-0">
              <label htmlFor="firstName" className="block text-[12.06px] leading-[20.1px] text-white font-medium pl-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className=" p-2  pr-0 lg:w-[90%]  border-b-[1px] border-white w-full focus:outline-none focus:border-white bg-[#106466] text-[12.06px] leading-[20.1px] text-white font-medium "
              />
            </div>
            <div className="lg:w-1/2  text-start">
              <label htmlFor="lastName" className="block text-[12.06px] leading-[20.1px] text-white font-medium lg:pl-1 text-start">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className=" p-2 lg:w-[90%]  border-b-[1px] border-white w-full focus:outline-none focus:border-white bg-[#106466] text-[12.06px] leading-[20.1px] text-white font-medium "
              />
            </div>
          </div>

          {/* Email and Phone Fields */}
          <div className="mb-16 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:pr-2 mb-14
             lg:mb-0">
              <label htmlFor="email" className="block text-[12.06px] leading-[20.1px] text-white font-medium pl-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className=" p-2 lg:w-[90%]  border-b-[1px] border-white w-full focus:outline-none focus:border-white bg-[#106466] text-[12.06px] leading-[20.1px] text-white font-medium "
              />
            </div>
            <div className="lg:w-1/2 ">
              <label htmlFor="phone" className="block text-[12.06px] leading-[20.1px] text-white font-medium pl-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className=" p-2 lg:w-[90%]  border-b-[1px] border-white w-full focus:outline-none focus:border-white bg-[#106466] text-[12.06px] leading-[20.1px] text-white font-medium "
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-16">
            <label htmlFor="message" className="block text-[12.06px] leading-[20.1px] text-white font-medium pl-1 mb-3">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="1"
              placeholder="Write your message.."
              className="p-1  lg:w-[95%]  border-b-[1px] border-white w-full focus:outline-none focus:border-white bg-[#106466] text-[12.06px] leading-[20.1px] text-white font-medium placeholder:text-white"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className=" text-major px-7 py-3 rounded-md bg-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
