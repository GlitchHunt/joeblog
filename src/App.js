import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import './App.css';
import format from 'date-fns/format';
import gamedimg from './svgs/gamedimg.svg';
import codedimg from './svgs/codedimg.svg';
import exercisedimg from './svgs/exercisedimg.svg';
import happy from './svgs/happy.svg';
import happyuncheck from './svgs/happyuncheck.svg';
import meh from './svgs/meh.svg';
import mehuncheck from './svgs/mehuncheck.svg';
import sad from './svgs/sad.svg';
import saduncheck from './svgs/saduncheck.svg';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [blogEntries, setBlogEntries] = useState([]);
  const [gamed, setGamed] = useState(false);
  const [exercised, setExercised] = useState(false);
  const [coded, setCoded] = useState(false);
  const [mood, setMood] = useState();
  useEffect(() => {
    db.collection('blogs')
      .doc('2J64fVLMjr6uDV1LzIos')
      .onSnapshot((querySnapshot) => {
        setBlogEntries(querySnapshot.data().entries);
      });
  }, []);

  const handlenTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlenDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlenGamedChange = (event) => {
    setGamed(event.target.checked);
  };

  const handlenExercisedChange = (event) => {
    setExercised(event.target.checked);
  };

  const handlenCodedChange = (event) => {
    setCoded(event.target.checked);
  };

  const handlenMoodChange = (event) => {
    setMood(event.target.value);
  };

  const postDate = new Date();

  const formattedDate = format(postDate, 'do MMMM yyyy');

  const handleClick = () => {
    const newEntry = { title, description, postDate, formattedDate, gamed, exercised, coded, mood };
    db.collection('blogs')
      .doc('2J64fVLMjr6uDV1LzIos')
      .update({
        entries: [newEntry, ...blogEntries]
      })
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });
  };

  return (
    <div className="App">
      <h1 className="global-header">GlitchHunts&apos; Blog</h1>
      <div className="new-journal-entry">
        <form>
          <div className="post-title">
            <input
              className="title-entry"
              type="text"
              onChange={handlenTitleChange}
              value={title}
              placeholder="Give me a title!"
            />
          </div>
          <div className="post-content">
            <textarea
              className="post-text"
              type="textarea"
              onChange={handlenDescriptionChange}
              value={description}
              placeholder="Write about your day!"
            />
          </div>
          <div className="mood-form">
            <input
              id="great"
              type="radio"
              name="mood"
              onChange={handlenMoodChange}
              checked={mood === 'great'}
              value="great"
            />
            <label htmlFor="great">
              {' '}
              {mood === 'great' ? (
                <img alt="The day was great!" src={happy} width="50px" height="50px" />
              ) : (
                <img alt="The day was great!" src={happyuncheck} width="50px" height="50px" />
              )}
            </label>
            <input
              id="meh"
              type="radio"
              name="mood"
              onChange={handlenMoodChange}
              checked={mood === 'meh'}
              value="meh"
            />
            <label htmlFor="meh">
              {' '}
              {mood === 'meh' ? (
                <img alt="The day was meh." src={meh} width="50px" height="50px" />
              ) : (
                <img alt="The day was great!" src={mehuncheck} width="50px" height="50px" />
              )}
            </label>
            <input
              id="rough"
              type="radio"
              name="mood"
              onChange={handlenMoodChange}
              checked={mood === 'rough'}
              value="rough"
            />
            <label htmlFor="rough">
              {' '}
              {mood === 'rough' ? (
                <img alt="The day was rough!" src={sad} width="50px" height="50px" />
              ) : (
                <img alt="The day was rough!" src={saduncheck} width="50px" height="50px" />
              )}
            </label>
          </div>
          <div>
            <input id="coding" type="checkbox" value={coded} onChange={handlenCodedChange} />
            <label htmlFor="coding">
              {' '}
              {coded === true ? (
                <img
                  alt="I coded"
                  src={codedimg}
                  style={{ border: '1px solid blue' }}
                  width="50px"
                  height="50px"
                />
              ) : (
                <img alt="I coded" src={codedimg} width="50px" height="50px" />
              )}
            </label>
            <input
              id="exercise"
              type="checkbox"
              value={exercised}
              onChange={handlenExercisedChange}
            />
            <label htmlFor="exercise">
              {' '}
              {exercised === true ? (
                <img
                  alt="I exercised"
                  src={exercisedimg}
                  style={{ border: '1px solid blue' }}
                  width="50px"
                  height="50px"
                />
              ) : (
                <img alt="I exercised" src={exercisedimg} width="50px" height="50px" />
              )}
            </label>
            <input id="gaming" type="checkbox" value={gamed} onChange={handlenGamedChange} />
            <label htmlFor="gaming">
              {' '}
              {gamed === true ? (
                <img
                  alt="I gamed"
                  src={gamedimg}
                  style={{ border: '1px solid blue' }}
                  width="50px"
                  height="50px"
                />
              ) : (
                <img alt="I gamed" src={gamedimg} width="50px" height="50px" />
              )}
            </label>
          </div>
          <div className="post-submit">
            <button type="button" onClick={handleClick}>
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="journalEntryMapper">
        {blogEntries &&
          blogEntries.map((item) => (
            <div className="journal-entry-wrapper">
              <h1>{item.title}</h1>
              <p>{item.formattedDate}</p>
              <p>{item.description}</p>
              <div>
                {item.gamed && <img alt="I gamed" src={gamedimg} />}
                {item.exercised && <img alt="I exercised" src={exercisedimg} />}
                {item.coded && <img alt="I coded" src={codedimg} />}
              </div>
              <div>
                {item.mood === 'great' && (
                  <img alt="The day was great!" src={happy} width="50px" height="50px" />
                )}
                {item.mood === 'meh' && (
                  <img alt="The day was meh." src={meh} width="50px" height="50px" />
                )}
                {item.mood === 'rough' && (
                  <img alt="The day was rough..." src={sad} width="50px" height="50px" />
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
