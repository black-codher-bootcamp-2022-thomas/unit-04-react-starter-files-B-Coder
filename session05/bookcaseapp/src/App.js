import React, { useState } from "react";
import Book from "./components/Book";
import bookData from "./models/books.json";

function App() {
  console.log(bookData[0]);
  return (
    <div>
      Stephs Bookcase App
      {bookData.map((currentBook) => (
        <Book
          key={currentBook.id}
          title={currentBook.volumeInfo.title}
          author={currentBook.volumeInfo.authors}
          price={currentBook.saleInfo.retailPrice?.amount ?? "no price available" }
          description={currentBook.volumeInfo?.description ?? "no description available"}
        />
      ))}
    </div>
  );
}

export default App;
