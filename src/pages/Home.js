import About from 'components/About';
import Landing from 'components/Landing';
import Services from 'components/Services';
import NavBar from 'components/shared/NavBar';
import WhyUs from 'components/WhyUs';
import React from 'react';
// import bg from '../assets/bg.jfif';
import 'styles/main.scss';

const Home = () => {
  return (
    <div className="bg-none">
      <NavBar />
      <Landing />
      <About />
      <Services />
      <WhyUs />
    </div>
  );
};

export default Home;
