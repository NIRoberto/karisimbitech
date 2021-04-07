import FooterPage from 'components/FooterPage';
import Main from 'components/shared/Main';
import NavBar from 'components/shared/NavBar';
import React, { useState } from 'react';
import aboutImage from 'assets/undraw_contact_us_15o2.svg';
const ContactPage = () => {
  const [sideBar, setsideBar] = useState(false);

  return (
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
  );
};

export default ContactPage;
