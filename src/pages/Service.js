import FooterPage from 'components/FooterPage';
import Services from 'components/Services';
import Main from 'components/shared/Main';
import NavBar from 'components/shared/NavBar';
import React, { useState } from 'react';
import aboutImage from 'assets/undraw_open_source_1qxw.svg';
import Contact from 'components/Contact';
const Service = () => {
  const [sideBar, setsideBar] = useState(false);

  return (
    <div>
      <NavBar sideBar={sideBar} setSideBar={setsideBar} />
      <Main
        title="Our services"
        // desc="We help companies succeed"
        HeaderImage={aboutImage}
      />
      <Services />
      <Contact />
      <FooterPage />
    </div>
  );
};

export default Service;
