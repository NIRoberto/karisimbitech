import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhone } from 'react-icons/bi';
import { FaFacebookSquare } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const FooterPage = () => {
  return (
    <>
      <footer className="bg-white h-80 grid grid-cols-3 gap-4 p-14">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            perspiciatis, nostrum obcaecati dolorum aliquid harum aut tempora
            quidem inventore libero nemo accusantium animi beatae, minima
            maiores mollitia reiciendis totam nam!
          </div>
          <ul className="hidden py-4 mr-8 text-lg md:flex">
            <li>
              <a href="https://web.facebook.com/karisimbitech">
                <FaFacebookSquare />
              </a>
            </li>
            {/* <li className="ml-4">
              <a href="/">
                <FaTwitterSquare />
              </a>
            </li>
            <li className="ml-4">
              <a href="/">
                <AiFillLinkedin />
              </a>
            </li> */}
          </ul>
        </div>
        <div className="p-2">
          <div className="text-lg ">
            <h1>Quick links</h1>
          </div>
          <ul>
            <li className="footerLink">
              <Link to="/">Home</Link>
            </li>
            <li className="footerLink">
              <Link to="/about"> About</Link>
            </li>
            <li className="footerLink">
              <Link to="/services">Service</Link>
            </li>
            <li className="footerLink">
              <Link to="/case-study">Case study</Link>
            </li>
            <li className="footerLink">
              <Link to="/contact">Contact</Link>
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
