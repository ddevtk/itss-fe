import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function WordBox({ word, imgUrl, mean, index }) {
//   useEffect(() => {
//     console.log(index);
//   }, [index]);

  // const classes = useStyle();
  return (
    <div className={'card-word-spec7 card-' + (index+1)}>
      {imgUrl}
      <div className="contnent">
        <h2 className="card-spec2-title">{word}</h2>
        <p className="card-spec2-descr">{mean}</p>
      </div>
    </div>
  );
}

export default WordBox;
