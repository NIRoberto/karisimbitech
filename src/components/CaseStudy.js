import React from 'react';
import bg from 'assets/bg.jfif';

const CaseStudy = () => {
  return (
    <div className="bg-sbg h-s p-8 md:p-16">
      <div className="show">
        <span>Case study</span>
      </div>

      <div className="desc">
        <span>Same of Awesome case study</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 text-white ">
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="p-4 rounded-md shadow-md hover:shadow-2xl cursor-pointer object-cover"
        >
          <div className="text-2xl">
            <h3>Ivuriro</h3>
          </div>
          <div>
            <p className="text-xs text-gray-300 py-2">
              This is our flagship and it’s a comprehensive electronic medical
              records system built for the Rwandan healthcare sector
            </p>
          </div>
          <div>
            <a
              className="active"
              target="_blank"
              href="https://www.ivuliro.com/"
              rel="noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default CaseStudy;
