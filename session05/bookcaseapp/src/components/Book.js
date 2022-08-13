import React from 'react';
import PropTypes from 'prop-types';



const Book =(props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
    </div>
  );
}

export default Book;