import React from "react";
import Book from "./Book";

const BookList =(props) => {
    return (
        <>
          Stephs Bookcase App
          {props.fullbookdata.map((currentBook) => (
            <Book
              key={currentBook.id}
              bookcover={currentBook.volumeInfo.imageLinks.thumbnail}
              title={currentBook.volumeInfo.title}
              author={currentBook.volumeInfo.authors}
              price={currentBook.saleInfo.retailPrice?.amount ?? "no price available" }
              description={currentBook.volumeInfo?.description ?? "no description available"}
            />
          ))}
        </>
      );
    }

export default BookList;