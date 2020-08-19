import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Blog from './Blog';
import Navbar from './Navbar';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Blog">
            <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
