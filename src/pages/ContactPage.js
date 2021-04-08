import FooterPage from 'components/FooterPage';
import Main from 'components/shared/Main';
import NavBar from 'components/shared/NavBar';
import React, { useEffect, useState } from 'react';
import aboutImage from 'assets/undraw_contact_us_15o2.svg';
import Loader from 'loader/Loader';
const ContactPage = () => {
  const [sideBar, setsideBar] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  document.title = 'Contact - Karisimbi technology solution';

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <NavBar sideBar={sideBar} setSideBar={setsideBar} />
          <Main
            title="Contact Us"
            // desc="We help companies succeed"
            HeaderImage={aboutImage}
          />
          <div className="h-s flex justify-center items-center text-black text-4xl">
            Comming soon
          </div>

          <FooterPage />
        </div>
      )}
    </>
  );
};
export default ContactPage;
