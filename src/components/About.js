import React from 'react';
import about from '../assets/about.jpg';

const About = () => {
  return (
    <div className="bg-white grid grid-cols-5  h-screen p-16">
      <div className="col-span-3  w-4/5">
        <img src={about} alt="About" />
      </div>

      <div className="col-span-2 ">
        <div className="show">
          <span>About Us</span>
        </div>
        <div className="desc py-8 pb-4">
          <span className="capitalize">
            {' '}
            Karisimbi technology solution limited
          </span>
        </div>
        <div className="text-sm my-4">
          <span>
            is a company registered in Rwanda since June 2018. Our mission is to
            leapfrog service experience in East Africa using the power of
            technology.
          </span>
        </div>
        <div className="text-white py-4">
          <a className="btn" href="#about">
            Explore more
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
