import React, { useState } from 'react';
import { FaBars, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { GrLinkTop } from 'react-icons/gr';
import { Link, NavLink } from 'react-router-dom';
const NavBar = ({ sideBar, setSideBar }) => {
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

  window.addEventListener('scroll', changeBgcolor);

  return (
    <>
      <header
        className={` flex items-center shadow-md justify-items-center ${
          nav
            ? 'bg-white transition-position duration-500 ease-in-out sticky  text-black '
            : 'bg-bg text-white '
        } top-0 z-20 h-20 `}
        onClick={() => setSideBar(!sideBar)}
      >
        <div className="flex  px-4  items-center w-full justify-between">
          <nav className="flex   w-full md:w-4/5 lg:w-4/6 items-center justify-between">
            <div className="flex">
              <Link to="/">
                <a className=" text-2xl lg:text-4xl" href="/">
                  Karisimbi
                  <strong className="text-main">tech</strong>
                </a>
              </Link>
            </div>
            <div
              className={`${
                sideBar ? 'block' : 'hidden'
              } fixed bg-sidebar md:hidden  text-white z-20  right-0 w-80 bottom-0 top-0`}
            >
              <div className="p-6 text-2xl flex flex-col md:hidden   items-center justify-center">
                Karisimbi Technology Solution
              </div>
              <ol className=" flex flex-col md:hidden w-full text-gray-300  items-center justify-center  ">
                <li className="active  hover:bg-gray-700 py-2 border border-gray-800  pl-8 w-full">
                  <a href="/"> Home</a>
                </li>
                <li className="  hover:bg-gray-700 pl-8 py-2 border border-gray-800  w-full ">
                  <a href="/about">About</a>
                </li>
                <li className="  hover:bg-gray-700 pl-8 py-2 border border-gray-800  w-full ">
                  <a href="/service">Services</a>
                </li>
                <li className="  hover:bg-gray-700 pl-8 py-2 border border-gray-800  w-full ">
                  <a href="/case-study">Case Studies</a>
                </li>
                {/* <li className=" my-8 py-2 border border-gray-800 ">
                  <a href="/blog">Blog</a>
                </li> */}
                <li className="   hover:bg-gray-700 pl-8 py-2 border border-gray-800  w-full">
                  <a href="/contact">Contact</a>
                </li>
              </ol>
            </div>

            <ul className="hidden  md:flex">
              <li>
                <NavLink exact activeClassName="active" to="/">
                  {' '}
                  Home
                </NavLink>
              </li>
              <li className=" ml-4 lg:ml-8">
                <NavLink activeClassName="active" to="/about">
                  About
                </NavLink>
              </li>
              <li className=" ml-4 lg:ml-8">
                <NavLink activeClassName="active" to="/services">
                  Services
                </NavLink>
              </li>
              <li className=" ml-4 lg:ml-8">
                <NavLink activeClassName="active" to="/case-study">
                  Case Studies
                </NavLink>
              </li>
              {/* <li className=" ml-4 lg:ml-8">
                <NavLink activeClassName="active" to="/blog">
                  Blog
                </NavLink>
              </li> */}
              <li className=" ml-4 lg:ml-4">
                <NavLink activeClassName="active" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div
              className="bars cursor-pointer z-20   flex md:hidden"
              onClick={() => setSideBar(!sideBar)}
            >
              {!sideBar ? (
                <FaBars size={25} />
              ) : (
                <ImCross className="fixed top-8 right-4" size={23} />
              )}
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
            </li> */}
            <li className="ml-4">
              <a href="https://www.linkedin.com/company/ivuriro-software-services?trk=public_profile_topcard-current-company">
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <a
          href="#home"
          className="fixed right-4 bottom-4 cursor-pointer bg-main p-2 text-white rounded-full "
        >
          <GrLinkTop className="animate-pulse  text-white " />
        </a>
      </header>
    </>
  );
};

export default NavBar;
