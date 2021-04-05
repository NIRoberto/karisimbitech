import Landing from 'components/Landing';
import NavBar from 'components/shared/NavBar';
import React from 'react';
import 'styles/main.scss';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Landing />
    </div>
  );
};

export default Home;
