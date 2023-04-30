import React from 'react';
import './NoResult.css';

function NoResult({ errorMessage }) {
  return (
    <div className='no-result'>
      <p className='no-result__text'>{errorMessage}</p>
    </div>
  );
}

export default NoResult;
