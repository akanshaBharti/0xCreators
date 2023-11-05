import React from 'react';
import './Css/heading.css'; 
const Heading = () => {
  return (
    <button className="button" data-text="Awesome">
        <div className='text-center'>
      <span className="actual-text">&nbsp;"DRIVE 3.0"&nbsp;</span>
      <span aria-hidden="true" className="hover-text">&nbsp;"DRIVE&nbsp;3.0"&nbsp;</span>
      </div>
    </button>
  );
};

export default Heading;
