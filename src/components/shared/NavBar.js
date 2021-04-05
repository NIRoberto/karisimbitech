import React from 'react';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  return (
    <header>
      <div className="header">
        <nav>
          <div className="logo">
            <h1>
              <a href="/">karisimbitech</a>
            </h1>
          </div>

          <ul>
            <li>
              <a className="active" href="/">
                {' '}
                Home
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/service">Services</a>
            </li>
            <li>
              <a href="/case">Case Study</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div className="bars">
            <FaBars size={25} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
