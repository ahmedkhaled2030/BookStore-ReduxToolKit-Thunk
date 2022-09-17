import React from "react";

const BooksList = ({ isLoading, books }) => {
  const BookList =books.length > 0 ?  books.map((item) => (
    <li
      className="list-group-item d-flex  justify-content-between align-items-center"
      key={item.id}
    >
      <div style={{marginBottom:'20px'}}>{item.title}</div>
      <div >
        <button type="button" className="btn btn-primary" style={{marginRight:'20px'}}>
          Read
        </button>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  )): 'There is no books Available';
  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? 'Loading...' : <ul className="list-group">{BookList}</ul>}
    </div>
  );
};

export default BooksList;
