import AboutPage from 'pages/AboutPage';
import CaseStudyPage from 'pages/CaseStudyPage';
import ContactPage from 'pages/ContactPage';
import Service from 'pages/Service';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/services">
          <Service />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/case-study">
          <CaseStudyPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
