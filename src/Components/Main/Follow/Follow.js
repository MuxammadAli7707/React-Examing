import React from 'react';
import { Link } from 'react-router-dom';
import './_Follow.scss'
function Follow() {
  return (
    <div className='follow'>
      <p className='follow__text'>Stories from the writers you follow will appear here.</p>
      <Link to="/recom">
        <button className='follow__btn'>Browse recommended stories</button>
      </Link>
    </div>
  );
}

export default Follow;