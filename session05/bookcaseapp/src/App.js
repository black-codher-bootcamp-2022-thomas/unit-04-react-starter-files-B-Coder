import React, { useState } from 'react';
import Book from './components/Book';
import bookData from './models/books.json';


function App() {
  console.log(bookData[0])
  return <div>
    Stephs Bookcase App
    {bookData.map(currentBook => <Book title={currentBook.volumeInfo.title} author={currentBook.volumeInfo.authors} />)}


  </div>

}

export default App;

