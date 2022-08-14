import React from "react";
import PropTypes from "prop-types";

const Book = ({title, author, price, description}) => {
  return (
    <div style={{ border: "4px solid indigo" }}>
      <h1>{title}</h1>
      <p>{author}</p>
      <p>{price}</p>
      <p>{description}</p>
    
    </div>
  );
};

export default Book;
