import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.author}</p>
      <p>{props.price}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default Book;
