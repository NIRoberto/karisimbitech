import React, { useState } from 'react';

import About from 'components/About';
import Contact from 'components/Contact';
import FooterPage from 'components/FooterPage';
import Main from 'components/shared/Main';
import NavBar from 'components/shared/NavBar';
import WhyUs from 'components/WhyUs';
import aboutImage from 'assets/undraw_visionary_technology_33jy.svg';

const AboutPage = () => {
  const [sideBar, setsideBar] = useState(false);

  return (
    <div>
      <NavBar sideBar={sideBar} setSideBar={setsideBar} />
      <Main
        title="About Us"
        // desc="We help companies succeed"
        HeaderImage={aboutImage}
      />
      <About />
      <WhyUs />
      <Contact />
      <FooterPage />
    </div>
  );
};

export default AboutPage;
