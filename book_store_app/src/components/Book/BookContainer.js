import React, { Fragment, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {getBooks } from '../../store/bookSlice';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import './BookContainer.css'

import './book.css';

const PostContainer = () => {
  const {isLoading , books} = useSelector(state => state.books);

  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch]);
  return (
    <Fragment>
      <hr className='my-5' style={{'color': 'black'}} />
      <div className='wrapper'>
        <div  className='BooksList'>
          <BooksList isLoading = {isLoading} books={books} />
        </div>
        <div  className='BookInfo' >
          <BookInfo />
        </div>
        
      </div>
    </Fragment>
  );
};

export default PostContainer;
