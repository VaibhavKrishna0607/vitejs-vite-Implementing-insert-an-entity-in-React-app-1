// src/App.jsx

import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import AddBookForm from './AppFormData';

function App() {
  return (
    <div className="App">
      <Home />
      <AddBookForm/>
    </div>
  );
}

export default App;
