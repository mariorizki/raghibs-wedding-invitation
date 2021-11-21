import React from 'react';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import firebase from 'firebase';

import './Wishes.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Wish from './Wish';

const Wishes = () => {
  const [wishes, setWishes] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [wishInput, setWishInput] = useState('');

  useEffect(() => {
    getWishes();
  }, []);

  const getWishes = () => {
    db.collection('wishes')
      .orderBy('timestamp', 'desc')
      .onSnapshot(function (querySnapshot) {
        setWishes(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().name,
            wish: doc.data().wish,
          }))
        );
      });
  };

  const addWishes = (e) => {
    e.preventDefault();
    if (nameInput !== '' && wishInput !== '') {
      db.collection('wishes').add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        name: nameInput,
        wish: wishInput,
      });

      setNameInput('');
      setWishInput('');
    } else {
      alert('Nama dan Ucapan tidak boleh kosong');
    }
  };

  return (
    <section className="wishes">
      <h3>Wedding Wishes</h3>
      <form className="wishes-form">
        <TextField
          id="standard-basic"
          value={nameInput}
          label="Nama"
          placeholder="Nama"
          variant="standard"
          onChange={(e) => setNameInput(e.target.value)}
        />
        <TextField
          id="outlined-multiline-static"
          label="Wish"
          value={wishInput}
          placeholder="Pesan atau doa"
          onChange={(e) => setWishInput(e.target.value)}
          multiline
          rows={4}
          defaultValue="Default Value"
        />
        <Button
          className="submit-btn"
          type="submit"
          onClick={addWishes}
          variant="contained"
          //   color="secondary"
        >
          Kirim
        </Button>
      </form>

      {wishes.map((wish) => (
        <Wish id={wish.id} wish={wish.wish} name={wish.name} />
      ))}
    </section>
  );
};

export default Wishes;
