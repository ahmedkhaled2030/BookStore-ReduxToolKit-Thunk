import React, { Fragment } from 'react';
import './BookInfo.css'

const BookInfo = () => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      <div className='alert alert-danger' role='alert' >
        There is no book selected yet. Please select!
      </div>

    </Fragment>
  );
};

export default BookInfo;
