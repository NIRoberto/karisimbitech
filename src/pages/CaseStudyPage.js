import CaseStudy from 'components/CaseStudy';
import Contact from 'components/Contact';
import FooterPage from 'components/FooterPage';
import Main from 'components/shared/Main';
import NavBar from 'components/shared/NavBar';
import Testimonials from 'components/Testimonials';
import React, { useEffect, useState } from 'react';
import aboutImage from 'assets/undraw_mobile_payments_vftl.svg';
import Loader from 'loader/Loader';

const CaseStudyPage = () => {
  const [sideBar, setsideBar] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  document.title = 'Case study - Karisimbi technology solution';

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <NavBar sideBar={sideBar} setSideBar={setsideBar} />
          <Main
            title="Case studies"
            // desc="We help companies succeed"
            HeaderImage={aboutImage}
          />
          <CaseStudy />
          <Testimonials />
          <Contact />
          <FooterPage />
        </div>
      )}
    </>
  );
};

export default CaseStudyPage;
