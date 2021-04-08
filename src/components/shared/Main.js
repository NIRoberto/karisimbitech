import React from 'react';
import img from 'assets/bg.jfif';

const Main = ({ title, desc, HeaderImage }) => {
  return (
    <div
      // style={{ backgroundImage: `url(${img})` }}
      className="h-s bg-bg bg-cover relative "
    >
      <div className="bg-bg justify-items-center items-center  grid grid-cols-2 h-full top-0 bottom-0 right-0">
        <div className="flex flex-col">
          <span className="text-5xl text-white">{title}</span>
          <span className="text-white  text-base py-4">{desc}</span>
        </div>
        <div>
          <img src={HeaderImage} alt="ImageDisplay" className="h-80" />
        </div>
      </div>
    </div>
  );
};

export default Main;
