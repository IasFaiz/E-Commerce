import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import Data from "./Data";

export const ItemDetails = () => {
  // const location = useLocation();
  // const { details } = location.state;
  // const params = useParams();
  // console.log("hello params", params);
  // const id = params.id;
  // const details = Data[id - 1];
  // return <div></div>;
  // console.log("sss", details);
  const location = useLocation();
  const { id } = location.state;

  const [details, setState] = useState({});
  const [ratings, setratings] = useState({});
  const url = `https://fakestoreapi.com/products/${id}`;

  // console.log("URL", url);
  useEffect(() => {
    (async () => {
      try {
        console.log("working");
        const resp = await fetch(url);
        const Data = await resp.json();
        setState(Data);
        console.log("Data", Data);
        setratings(Data.rating);
      } catch (err) {
        console.log("Error occured when fetching Data");
      }
    })();
  }, []);
  console.log("details", details);

  return (
    <div
      className="container  "
      style={{
        // border: "2px solid blue",
        width: "100%",
        display: "flex",
      }}
    >
      <img
        className="img-fluid mt-3 mb-3"
        src={details.image}
        alt="Loading..."
        style={{
          width: "20rem",
          margin: "auto",
          height: "20rem",
          boxShadow: "1px 1px 20px",
          padding: "10px",
          borderRadius: "5%",
        }}
      />
      <div
        className="card mt-3"
        style={{
          width: "40rem",
          margin: "auto",
          marginLeft: "20px",
          height: "100%",
          boxShadow: "10px 10px 20px  ",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{details.title}</h5>
          <p className="card-text font-weight-bold">
            {details.description ? details.description : "Loading..."}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {details.price ? details.price + " $" : "Loading..."}
          </li>
          <li className="list-group-item">
            {details.category ? details.category : "Loading..."}
          </li>
          <li className="list-group-item">
            {ratings.rate ? "Ratings: " + ratings.rate : "Loading..."}
          </li>
          <li className="list-group-item">
            {ratings.count ? "Count:  " + ratings.count : "Loading..."}
          </li>
        </ul>
        <div className="card-body">
          <Link to="/" className="navbar-brand">
            More Products
          </Link>
        </div>
      </div>
    </div>
  );
};
