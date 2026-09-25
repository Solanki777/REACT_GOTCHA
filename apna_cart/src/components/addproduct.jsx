import React, { useState } from "react";

export default function Addproduct(props) {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");

  const sbmt = (e) => {
    e.preventDefault();
    props.addItem(name, Number(price));
  };
  return (
    <form className="mb-5" onSubmit={sbmt}>
      <div className="row">
        <div className="col-8">
          <input
            type="text"
            className=""
            placeholder="item name"
            onChange={(e) => setname(e.target.value)}
            required
          />
        </div>

        <div className="col-2 ">
          <input
            type="number"
            className=""
            placeholder="item price"
            onChange={(e) => setprice(e.target.value)}
            required
          />
        </div>

        <div className="col-2 ">
          <button className="btn btn-danger ">add</button>
        </div>
      </div>
    </form>
  );
}
