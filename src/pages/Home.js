import About from 'components/About';
import CaseStudy from 'components/CaseStudy';
import Contact from 'components/Contact';
import FooterPage from 'components/FooterPage';
import Landing from 'components/Landing';
import Services from 'components/Services';
import NavBar from 'components/shared/NavBar';
import Testimonials from 'components/Testimonials';
import WhyUs from 'components/WhyUs';
import Loader from 'loader/Loader';
import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

// import Loading from 'react-loading';
// import bg from '../assets/bg.jfif';
import 'styles/main.scss';

const Home = () => {
  const [sideBar, setsideBar] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-none">
          <NavBar sideBar={sideBar} setSideBar={setsideBar} />

          <Landing sideBar={sideBar} setSideBar={setsideBar} />
          <About />
          <Services />
          <WhyUs />
          <CaseStudy />
          <Testimonials />
          <Contact />
          <FooterPage />
        </div>
      )}
    </>
  );
};

export default Home;
