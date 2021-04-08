import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Loader = () => {
  return (
    <div className="h-screen flex-col text-Bold text-lg flex items-center justify-center">
      <a className=" text-xl lg:text-2xl my-2" href="/">
        Karisimbi
        <strong className="text-main">tech</strong>
      </a>
      <ClipLoader color={`#03a9f4`} size={50} />
    </div>
  );
};

export default Loader;
