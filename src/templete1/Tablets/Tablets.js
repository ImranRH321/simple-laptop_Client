import React, { useEffect, useState } from "react";
import Tablet from "./Tablet";

const Tablets = () => {
  const [tablets, setTablets] = useState([]);
  useEffect(() => {
    fetch("https://laptop-1997.herokuapp.com/tablet")
      // fetch('tablets.json')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setTablets(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-2xl text-center my-5 font-bold  p-2 text-primary ">
        Tablets Service
      </h1>

      <div className="grid grid-cols-1 sm:gap-4 sm:grid-cols-2 md:grid-cols-3  gap-5 ">
        {tablets.map(tablet => (
          <Tablet tablet={tablet} key={tablet._id}></Tablet>
        ))}
      </div>
    </div>
  );
};

export default Tablets;
