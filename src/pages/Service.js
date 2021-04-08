import FooterPage from 'components/FooterPage';
import Services from 'components/Services';
import Main from 'components/shared/Main';
import NavBar from 'components/shared/NavBar';
import React, { useEffect, useState } from 'react';
import aboutImage from 'assets/undraw_open_source_1qxw.svg';
import Contact from 'components/Contact';
import Loader from 'loader/Loader';
const Service = () => {
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
      )}
    </>
  );
};

export default Service;
