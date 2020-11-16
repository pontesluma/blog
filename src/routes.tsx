import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import Layout from './components/Layout';

const Routes: React.FC = () => {
  return (
    <>
      <Router>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/article/:id" component={Article} />
        </Layout>
      </Router>
    </>
  );
};

export default Routes;
