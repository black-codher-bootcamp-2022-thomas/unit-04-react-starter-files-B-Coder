import React, { useState } from 'react';
import Book from './components/Book';
import bookData from './models/books.json';


function App() {
  console.log(bookData[0])
 return <div>
   Stephs Bookcase App
   <Book title={bookData[0].volumeInfo.title} author={bookData[0].volumeInfo.authors}/>
   <Book title="the color Pruple" author="Alice Walker"/>
 </div>
  
}

export default App;

