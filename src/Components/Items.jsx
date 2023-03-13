import React, { useState, useEffect } from "react";
// import Data from "./Data";
import Item from "./Item";
// import { Data } from "./Data";

const Items = () => {
  const [State, setState] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // await async "fetchBooks()" function
        const resp = await fetch("https://fakestoreapi.com/products");
        const Data = await resp.json();
        setState(Data);
      } catch (err) {
        console.log("Error occured when fetching books");
      }
    })();
  }, []);

  // console.log("ye raha", data);

  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          listStyleType: "none",
          boxShadow: "4px 4px 9px #808080",
          width: "100%",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        {State.map((e, index) => (
          <li
            className=""
            key={index}
            style={{
              margin: "1%",
              boxShadow: "5px 4px 9px #808080",
              width: "30%",
            }}
          >
            <Item
              id={e.id}
              title={e.title.slice(0, 10)}
              description={e.description.slice(0, 60)}
              image={e.image}
              products={e}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
