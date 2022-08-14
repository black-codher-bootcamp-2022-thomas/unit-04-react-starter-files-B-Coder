import React from "react";
import PropTypes from "prop-types";

const Book = ({title, author, price, description, bookcover}) => {
  return (
    <div style={{ border: "4px solid indigo" }}>
      <h1>{`Title: ${title}`}</h1>
      <p>{`Author: ${author}`}</p>
      <img src={bookcover} alt={` ${title} by ${author}`}/>
      <p>{`Price: ${price}`}</p>
      <p>{`description: ${description}`}</p>
    
    </div>
  );
};

export default Book;
