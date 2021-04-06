import React from 'react';

const Contact = () => {
  return (
    <div className="bg-bg h-60 text-white grid grid-cols-2 items-center justify-items-center">
      <div className="p-8">
        <div class="desc">Have project in mind let talk</div>

        <div className="text-xs text-gray-300 leading-4 py-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolore
          unde corporis consectetur, debitis qui. Quae voluptate esse
          repudiandae, iste alias reprehenderit nemo eos obcaecati amet in
          dignissimos laborum nostrum.
        </div>
      </div>

      <div>
        <button className="btn animate-bounce  focus:outline-none focus:border-none">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Contact;
