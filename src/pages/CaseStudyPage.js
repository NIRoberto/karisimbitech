import CaseStudy from 'components/CaseStudy';
import Contact from 'components/Contact';
import FooterPage from 'components/FooterPage';
import Main from 'components/shared/Main';
import NavBar from 'components/shared/NavBar';
import Testimonials from 'components/Testimonials';
import React, { useState } from 'react';
import aboutImage from 'assets/undraw_mobile_payments_vftl.svg';

const CaseStudyPage = () => {
  const [sideBar, setsideBar] = useState(false);

  return (
    <div>
      <NavBar sideBar={sideBar} setSideBar={setsideBar} />
      <Main
        title="Case study"
        // desc="We help companies succeed"
        HeaderImage={aboutImage}
      />
      <CaseStudy />
      <Testimonials />
      <Contact />
      <FooterPage />
    </div>
  );
};

export default CaseStudyPage;
