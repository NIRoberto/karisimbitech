import React from 'react';
import { BiTime } from 'react-icons/bi';
import { SiTrustpilot } from 'react-icons/si';
import { FcFlashOn } from 'react-icons/fc';
import { FaHardHat } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <div className="bg-white p-8 md:p-16">
      <div className="show">
        <span>Why choose Us</span>
      </div>
      <div className="desc">
        <span>We help companies succeed</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 py-8 mt-8 border-t border-gray-300">
        <div className="col-span-2 flex items-center justify-center">
          <div className="flex-col flex items-center">
            <span className="text-main text-4xl">200</span>
            <span className="text-xs p-4">Successfully completed project</span>
          </div>
          <div className="flex-col border-l border-gray-300 flex items-center">
            <span className="text-main text-4xl">23</span>
            <span className="text-xs p-4">Highly specialised employees</span>
          </div>
        </div>
        <div className="col-span-3 p-4">
          <p>
            Our flagship solution is Ivuriro Technology, a SaaS electronic
            medical records system that eliminates paper usage in hospitals,
            streamlining service delivery, and creating positive experiences for
            both hospital staff and patients.
          </p>
          <p className="py-2">
            As of August 2020, our technology has been used to treat tens of
            thousands of patients in Rwanda.
          </p>
        </div>
      </div>

      <div className="show capitalize py-8">
        <h1>values</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="values">
          <span className="icon">
            <BiTime />
          </span>
          <div className="flex  flex-col justify-between px-4">
            <span className="text-sm font-bold"> Time management</span>
            <span className="text-xs">
              Working around the clock to deliver your work just in time is what
              we do.
            </span>
          </div>
        </div>
        <div className="values">
          <span className="icon">
            <FcFlashOn />
          </span>

          <div className="flex  flex-col justify-between px-4">
            <span className="text-sm font-bold"> Fast work delivery</span>
            <span className="text-xs">
              We move full speed to give you what you asked for.
            </span>
          </div>
        </div>
        <div className="values">
          <span className="icon">
            <SiTrustpilot />
          </span>
          <div className="flex  flex-col  px-2 md:px-4">
            <span className="text-sm font-bold">Trust</span>
            <span className="text-xs">
              Entrust us with the security of your tools.
            </span>
          </div>
        </div>
        <div className="values">
          <span className="icon">
            <FaHardHat />
          </span>
          <div className="flex  flex-col  px-4">
            <span className="text-sm font-bold">Courage</span>
            <span className="text-xs">
              Lorem ipsum dolor sit amet consectetur illo.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
