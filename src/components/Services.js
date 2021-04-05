import React from 'react';

const Services = () => {
  return (
    <div id="service" className="p-16 bg-sbg h-screen flex flex-col">
      <div className="show">
        <span>Our services</span>
      </div>
      <div className="desc">
        <span>Provide Awesome Service</span>
      </div>
      <div className="grid grid-cols-3 py-4 gap-4">
        <div className="serviceCard">
          <div className="number">01</div>
          <div className="serviceTitle">User experience design</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            natus!
          </div>
          <div>
            <ul className="services">
              <li>
                <a href="/service">Branding and identy</a>
              </li>
              <li>
                <a href="/service">Mobile app</a>
              </li>
              <li>
                <a href="/service">Web designing</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="serviceCard">
          <div className="number">02</div>
          <div className="serviceTitle">Web and App development</div>
          <div className="text">
            Do you have a great app idea and you would like the powerhouse of a
            fully fledged engineering team? Then KTS is the right solution for
            you.
          </div>
          <div>
            <ul className="services">
              <li>
                <a href="/service">Word press</a>
              </li>
              <li>
                <a href="/service">Android & IOS</a>
              </li>
              <li>
                <a href="/service">FrontEnd & backend</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="serviceCard">
          <div className="number">03</div>
          <div className="serviceTitle">MIS Development</div>
          <div className="text">
            We digitize your tools to help you make informed decisions by
            building you amazing Management Information Systems.
          </div>
          <div>
            <ul className="services">
              <li>
                <a href="/service">Systems analyst</a>
              </li>
              <li>
                <a href="/service">Database manager</a>
              </li>
              <li>
                <a href="/service">Network administrator</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
