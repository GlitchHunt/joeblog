import React, { useEffect, useState } from 'react';
import './boredom.css';
import axios from 'axios';

function Boredom() {
  const [activity, setActivity] = useState('');

  async function fetchData() {
    const { data } = await axios.get('http://www.boredapi.com/api/activity/');

    setActivity(data.activity);
  }

  useEffect(() => {
    if (activity === '') {
      fetchData();
    }
  }, [activity]);

  return (
    <div className="Boredom">
      <h1>Are you bored?</h1>
      <p>{activity}</p>
      <button type="button" className="Evil-button" onClick={fetchData}>
        Click me!
      </button>
    </div>
  );
}

export default Boredom;
