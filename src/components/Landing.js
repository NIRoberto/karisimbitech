import React from 'react';
import '../styles/main.scss';
import img from '../assets/landing.svg';

const Landing = () => {
  return (
    <div className="landing bg-bg h-screen flex  flex-row justify-center  items-center pl-16 text-white">
      <div>
        <div className="border mb-4 border-main rounded-2xl text-center w-1/3 text-xs p-1 text-main">
          <span>Karisimbi technology solution</span>
        </div>
        <div className="text-6xl w-3/4   my-8">
          <p>We are an IT company based in Kigali -Rwanda</p>
        </div>
        <div className="mt-4">
          <a href="#service" className="btn" type="button">
            Explore services
          </a>
        </div>
      </div>
      <div className="w-4/5 pr-20 pl-0">
        <img className="" src={img} alt="backgroundImage" />
      </div>
    </div>
  );
};

export default Landing;
