import React from 'react';
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BiPhone } from 'react-icons/bi';
import { FaFacebookSquare } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const FooterPage = () => {
  return (
    <>
      <footer className="bg-white lg:h-80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 md:p-14">
        <div>
          <div className="flex">
            <h1>
              <a className=" text-2xl lg:text-4xl" href="/">
                Karisimbi
                <strong className="text-main">tech</strong>
              </a>
            </h1>
          </div>
          <div className="text-xs py-2">
            KARISIMBI TECHNOLOGY SOLUTIONS LIMITED is a company registered in
            Rwanda since June 2018. Our mission is to leapfrog service
            experience in East Africa using the power of technology.
          </div>
          <ul className="py-4 mr-8 text-lg flex">
            <li>
              <a href="https://web.facebook.com/karisimbitech">
                <FaFacebookSquare />
              </a>
            </li>
            {/* <li className="ml-4">
              <a href="/">
                <FaTwitterSquare />
              </a>
            </li> */}
            <li className="ml-4">
              <a href="https://www.linkedin.com/company/ivuriro-software-services?trk=public_profile_topcard-current-company">
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <div className="md:p-2">
          <div className="text-lg ">
            <h1>Services</h1>
          </div>
          <ul>
            <li className="footerLink">
              <Link to="/services">App development</Link>
            </li>
            <li className="footerLink">
              <Link to="/about"> </Link>
            </li>
            <li className="footerLink">
              <Link to="/services">MIS developement</Link>
            </li>
            <li className="footerLink">
              <Link to="/services">User experience design</Link>
            </li>
          </ul>
        </div>
        {/* <div></div> */}
        <div>
          <div className="text-lg text-black">
            <h1>Contact</h1>
          </div>

          <ul>
            <li>
              <a className="flex my-4" href="/">
                <span className="icons">
                  <AiOutlineMail />
                </span>
                <span className="text-sm">info@karisimbitech.rw</span>
              </a>
            </li>
            <li>
              <a className="flex my-4" href="/">
                <span className="icons">
                  <BiPhone />
                </span>
                <span className="text-sm">
                  +250-788-353-900, +250-788-403-594, +250-788-597-772
                </span>
              </a>
            </li>
            <li>
              <a className="flex my-4" href="/">
                <span className="icons">
                  <GrLocation />
                </span>
                <span className="text-sm">
                  KK 15 Rd - Innovation Center Building - Kigali, Rwanda
                </span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="p-4 shadow-md border-t border-gray-200 text-center text-xs">
        <p>
          Copyright ©2021 All rights reserved | This template is made with by
          Robert
        </p>
      </div>
    </>
  );
};

export default FooterPage;
