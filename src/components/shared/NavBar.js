import React, { useState } from 'react';
import { FaBars, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const changeBgcolor = () => {
    console.log(window.scrollY);
    console.log(nav);
    if (window.scrollY >= 400) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  // useEffect(() => {
  window.addEventListener('scroll', changeBgcolor);
  // }, []);

  return (
    <>
      <header
        className={` flex items-center shadow-md justify-items-center ${
          nav
            ? 'bg-white transition-position duration-500 ease-in-out sticky  text-black '
            : 'bg-bg text-white '
        } top-0 z-20 h-20 `}
      >
        <div className="flex  px-4   items-center w-full justify-between">
          <nav className="flex   w-full md:w-3/4 lg:w-4/6 items-center justify-between">
            <div className="flex">
              <h1>
                <a className="text-4xl" href="/">
                  Karisimbi
                  <strong className="text-main">tech</strong>
                </a>
              </h1>
            </div>

            <ul className="hidden md:flex">
              <li>
                <a className="active" href="/">
                  {' '}
                  Home
                </a>
              </li>
              <li className=" ml-4 lg:ml-8">
                <a href="/about">About</a>
              </li>
              <li className=" ml-4 lg:ml-8">
                <a href="/service">Services</a>
              </li>
              <li className=" ml-4 lg:ml-8">
                <a href="/case">Case Study</a>
              </li>
              <li className=" ml-4 lg:ml-8">
                <a href="/blog">Blog</a>
              </li>
              <li className=" ml-4 lg:ml-4">
                <a href="/contact">Contact</a>
              </li>
            </ul>
            <div className="bars  flex md:hidden">
              <FaBars size={25} />
            </div>
          </nav>
          <ul className="hidden mr-8 text-lg md:flex">
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
      </header>
    </>
  );
};

export default NavBar;
