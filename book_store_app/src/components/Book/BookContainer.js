import React, { Fragment, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {getBooks } from '../../store/bookSlice';
import BookInfo from './BookInfo';
import BooksList from './BooksList';

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
      <div className='row' style={{'display':'flex' , 'justifyContent':'center', 'alignItems': 'center'}}>
        <div className='col-lg-6'>
          <BooksList isLoading = {isLoading} books={books} />
        </div>
        <div className='col-lg-6 side-line' style={{'border': '1px solid #ddd'}}>
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
