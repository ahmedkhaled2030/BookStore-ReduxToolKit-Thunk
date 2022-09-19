import React from "react";
import { useSelector, useDispatch } from "react-redux";

const BooksList = ({ isLoading, books, deleteBook, dispatch }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const BookList =
    books.length > 0
      ? books.map((item) => (
          <li
            className="list-group-item d-flex  justify-content-between align-items-center"
            key={item.id}
          >
            <div style={{ marginBottom: "20px" }}>{item.title}</div>
            <div>
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginRight: "20px" }}
              >
                Read
              </button>
              <button
                type="button"
                className="btn btn-danger"
                disabled={!isLoggedIn}
              onClick={() =>
                  
                //then without unwrap =>{type: 'book/deleteBook/fulfilled', payload: {…}, meta: {…}} response of thunk api

                // then with unwrap => {id: 2, title: 'Learn Javascript', description: 'Learn Javascript from scratch', price: 40}
                
                  dispatch(deleteBook(item)).unwrap().then((originalPromise) => {
                    console.log(originalPromise);
                  }).catch((error) => {
                    console.log(error)
                  })
                }
              >
                Delete
              </button>
            </div>
          </li>
        ))
      : "There is no books Available";
  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? "Loading..." : <ul className="list-group">{BookList}</ul>}
    </div>
  );
};

export default BooksList;
