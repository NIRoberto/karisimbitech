import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="bg-bg  text-white grid grid-cols-1 md:grid-cols-2 items-center justify-items-center">
      <div className="p-8">
        <div class="text-4xl  text-white">Have project in mind let talk</div>

        <div className="text-sm text-gray-300 leading-5 py-4 ">
          If your organization uses a lot of papers while storing and managing
          work-related information, we shall build you computer software to
          automate everything. It shall save you money, time, increase your
          business’s efficiency, and give you clarity in what is going on behind
          the numbers hence helping you make important decisions with
          confidence. Give us a call today, or click on the button onn right
          side
        </div>
      </div>

      <Link to="/contact">
        <button className="btn animate-bounce  focus:outline-none focus:border-none">
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default Contact;
