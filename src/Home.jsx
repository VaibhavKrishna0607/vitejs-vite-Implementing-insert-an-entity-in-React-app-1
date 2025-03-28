// src/components/Home.jsx

import React from "react";
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css"; // Import the CSS for styling
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const handleAddBookClick = () => {
    navigate('/add-book'); 
  };

  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      
      <button
        // onClick={handleAddBookClick} 
        style={{ padding: '10px 20px', margin: '20px 0' }}
      >
        Add Book
      </button>


    </div>
  );
};

export default Home;
