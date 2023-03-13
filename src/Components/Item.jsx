import React from "react";
import { Link } from "react-router-dom";

// const details = (props) => {
//   console.log("All props", props);
//   return {
//     category: props,
//   };
// };

const Item = (props) => {
  return (
    <div>
      <div
        className="card"
        style={{
          width: "100%",
          height: "100%",
          padding: "5px",
          margin: "3px",
          border: "none",
        }}
      >
        <img
          className="card-img-top"
          src={
            props.image
              ? props.image
              : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          }
          alt="Image nahi hai"
          style={{
            width: "100%",
            height: "260px",
          }}
        />
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.description}</p>
        </div>
        <div className="container">
          <button className="btn btn-success">
            <Link
              to={`product/${props.id}`}
              className="text-light"
              state={{
                id: props.id,
              }}
            >
              More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
