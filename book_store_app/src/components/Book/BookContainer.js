import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, deleteBook } from "../../store/bookSlice";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import "./BookContainer.css";

import "./book.css";

const PostContainer = () => {
  const { isLoading, books } = useSelector((state) => state.books);
  const [selectedBook, setSelectedBook] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const getBookId = (id) => {
    const selectedBook = books.find((item) => item.id === id);
    setSelectedBook((prev) => {
      return { ...prev, ...selectedBook };
    });
  };

  return (
    <Fragment>
      <hr className="my-5" style={{ color: "black" }} />
      <div className="wrapper">
        <div className="BooksList">
          <BooksList
            isLoading={isLoading}
            books={books}
            deleteBook={deleteBook}
            dispatch={dispatch}
            getBookId={getBookId}
          />
        </div>
        <div className="BookInfo">
          <BookInfo info={selectedBook} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
