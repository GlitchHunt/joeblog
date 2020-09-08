import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './Blog';
import Navbar from './Navbar';
import Boredom from './Boredom';

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Blog">
              <Blog />
            </Route>
            <Route path="/Boredom">
              <Boredom />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
