import React, { useState } from "react";
import BookList from "./components/BookList";
import bookData from "./models/books.json";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
  const [allBookData, setAllBookData] = useState(bookData);

  const findBooks = async(value) => {
    const url=`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`

    const response= await fetch(url, {method:"GET"})

    const result= await response.json
    
    setAllBookData(result)
  }
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <button onClick={() => setAllBookData([bookData[22]])}>
              change book
            </button>
            <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword}/>
            <BookList fullbookdata={allBookData} />
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
