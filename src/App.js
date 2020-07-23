import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import './App.css';
import format from 'date-fns/format';

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

  const postDate = new Date();

  const formattedDate = format(postDate, 'do MMMM yyyy');
  console.log(formattedDate);

  const handleClick = () => {
    const newEntry = { title, description, postDate, formattedDate };
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
          <label htmlFor="Title">
            Title your post
            <input type="text" onChange={handlenTitleChange} value={title} placeholder="e.g. Joe" />
          </label>
          <break />
          <label htmlFor="new blog">
            How was your day?
            <textarea
              type="textarea"
              onChange={handlenDescriptionChange}
              value={description}
              placeholder="Write about your day!"
            />
          </label>
          <button type="button" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
      <div className="journalEntryMapper">
        {blogEntries &&
          blogEntries.map((item) => (
            <div className="journal-entry-wrapper">
              <h1>{item.title}</h1>
              <p>{item.formattedDate}</p>
              <p>{item.description}</p>
            </div>
          ))}
      </div>
      {/* <div className="journal-entry-wrapper">
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
      </div> */}
    </div>
  );
}

export default App;
