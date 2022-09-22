import React, { Fragment } from "react";
import "./BookInfo.css";

const BookInfo = ({ info }) => {
  return (
    <Fragment>
      <h2>Book Details</h2>

      {Object.values(info).length > 0 ? (
        <div className="infoWrapper">
          <div className="bookInfo">
            <p><span>Title</span> : {info.title}</p>
            <p><span>Price</span> : {info.price}</p>
            <p><span>Description</span> : {info.description}</p>
          </div>
          <div className="bookImg">
            <img src={info.image} />
          </div>
        </div>
      ) : (
        <div className="alert alert-primary" role="alert">
          There is no book selected yet. Please select!
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
