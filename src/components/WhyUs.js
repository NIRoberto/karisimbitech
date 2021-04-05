import React from 'react';

const WhyUs = () => {
  return (
    <div className="bg-white p-16">
      <div className="show">
        <span>Why choose Us</span>
      </div>
      <div className="desc">
        <span>We help companies succeed</span>
      </div>
      <div className="grid grid-cols-5 gap-2 py-8 mt-8 border-t border-gray-300">
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
    </div>
  );
};

export default WhyUs;
