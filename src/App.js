import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="global-header">GlitchHunts&apos; Blog</h1>
      <div className="new-journal-entry">
        <form>
          <label htmlFor="date">
            Date:
            <input className="date" type="text" />
          </label>
          <label className="new-entry-text" htmlFor="journal-entry">
            Journal entry:
            <textarea />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="journal-entry-wrapper">
        <p className="date">17/07/2020</p>
        <p className="journal-entry">
          I&apos;m now planning to build out this site into a private journal, taking inspiration
          from several different applications. I will be mostly working on styling and continuing my
          React tutorials for the most part, and slowly add features as I go!
        </p>
      </div>
      <div className="journal-entry-wrapper">
        <p className="date">16/07/2020</p>
        <p className="journal-entry">
          This is my first attempt at writing various bits and pieces down, documenting both my
          coding journey, as well as notes from my day/week/month/year
        </p>
      </div>
    </div>
  );
}

export default App;
