import { useState } from 'react';

import './App.css';
import Form from './Form';
import React from 'react';

function App() {
  const [tM, setTM] = useState([]);
  const addNewM = (f) => {
    const newM = { name: f.name, email: f.email, pass: f.pass, checkbox: f.checkbox };
    setTM([...tM, newM]);
  }
  console.log(tM);
  return (
    <div className="App">
      <h2>User Onboarding</h2>
      <Form />
    </div>
  );
}

export default App;
