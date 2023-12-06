import Footer from "../components/LandingPage/Footer";
import Navbar from "../components/LandingPage/Navbar";
import { useRef } from "react";
import Programs from "../components/LandingPage/Programs";
import AboutUs from "../components/LandingPage/About";

const Homepage = () => {
  const aboutRef = useRef(null);
  const programsRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPrograms = () => {
    if (programsRef.current) {
      programsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar
        home={scrollToHome}
        about={scrollToAbout}
        programs={scrollToPrograms}
      />
      <div
        ref={homeRef}
        className="flex flex-col lg:flex-row items-center py-16 px-8 md:px-16 lg:px-32 bg-[#FFC3A9]"
      >
        <div className="lg:w-1/2 text-center lg:text-left lg:mb-0 lg:mt-0 my-8">
          <h1 className="md:text-6xl md:pt-8 text-3xl font-semibold mb-4 uppercase font-Bangers tracking-widest">
            Selamat datang
          </h1>
          <span className="md:text-4xl font-bold text-4xl text-white font-DM">
            Pada Media Pembelajaran Sistem Pernafasan Kelas 8 SMP
          </span>
          <p className="text-black text-xl mt-4">
            Sistem Pernafasan adalah sistem yang berfungsi untuk mengambil
            oksigen dari udara dan membuang karbondioksida ke udara.
          </p>
          <a
            href="/dashboard/disclaimer"
            className="bg-black text-white border-white hover:bg-button hover:text-black hover:border  font-semibold py-2 px-6 rounded-full mt-4 inline-block"
          >
            Selengkapnya
          </a>
        </div>
        <div className="lg:w-1/2 w-full">
          <img
            src="./napas.png"
            alt="home"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
      <div
        ref={aboutRef}
        className="py-8 md:py-16 lg:py-24 px-8 md:px-16 lg:px-32 bg-gray-100"
      >
        <AboutUs />
      </div>
      <div
        ref={programsRef}
        className="py-8 md:py-16 lg:py-24 px-8 md:px-16 lg:px-32"
      >
        <Programs />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
