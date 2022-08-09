import React, { useEffect, useState } from "react";
import Tablet from "./Tablet";

const Tablets = () => {
  const [tablets, setTablets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tablet")
      // fetch('tablets.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTablets(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-5xl text-center my-5 font-bold  p-2">
        Tablets  <span className="text-warning"> Service</span>{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-5">
        {tablets.map(tablet => (
          <Tablet tablet={tablet} key={tablet._id}></Tablet>
        ))}
      </div>
    </div>
  );
};

export default Tablets;
