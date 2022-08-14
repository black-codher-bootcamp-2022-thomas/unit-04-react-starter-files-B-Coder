import React, { useState } from "react";
import BookList from "./components/BookList";
import bookData from "./models/books.json";

function App() {
  console.log(bookData[0]);
  return <BookList fullbookdata={bookData}/>
    
}

export default App;
