import React from 'react';
import PropTypes from 'prop-types';



const Book =(props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <h4>{props.price}</h4>
      <h5>{props.description}</h5>
    </div>
  );
}

export default Book;