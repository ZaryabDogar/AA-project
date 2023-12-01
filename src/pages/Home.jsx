import Banner from "../components/Banner";
import DataSecurity from "../components/DataSecurity";
import Features from "../components/Features";
import Revenue from "../components/Revenue";
import ContactForm from "../components/ContactForm";
const Home = () => {
  return (
    <>
    <section className="bg-gradient-to-b from-[#2C3532] to-[#000000] ">
      <Banner/>
      <DataSecurity/>
      <Features/>
      <Revenue/>
      <ContactForm/>
      </section>
    </>
  );
};

export default Home;
