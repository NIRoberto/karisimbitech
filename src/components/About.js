import React from 'react';
import { Link } from 'react-router-dom';
import about from '../assets/about.jpg';

const About = () => {
  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-5   p-8 md:p-16">
      <div className="col-span-3 w-11/12  md:w-4/5">
        <img src={about} alt="About" />
      </div>

      <div className="col-span-2 mt-4  md:mt-0">
        <div className="show">
          <span>About Us</span>
        </div>
        <div className="desc py-8 pb-4">
          <span className="capitalize text-Bold ">
            {' '}
            Karisimbi technology solution limited
          </span>
        </div>
        <div className="text-sm my-4 text-text">
          <span>
            is a company registered in Rwanda since June 2018. Our mission is to
            leapfrog service experience in East Africa using the power of
            technology.
          </span>
        </div>
        <div className="text-white py-4">
          <Link to="/about">
            <a className="btn" href="#about">
              Explore more
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
