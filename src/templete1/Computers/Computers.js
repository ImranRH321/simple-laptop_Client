import React, { useEffect, useState } from "react";
import Computer from "./Computer";

const Computers = () => {
  const [computers, setComputers] = useState([]);
  useEffect(() => {
    fetch("https://laptop-1997.herokuapp.com/computer")
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setComputers(data);
      });
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-5xl text-center my-5 font-bold  p-2">
        <span className="text-primary xs:text-sm md:lg">Laptops Service</span>{" "}
       
      </h1>
      <div class="divider w-[350px] mx-auto mb-10">OR</div>{" "}
      <div className="grid grid-cols-1 sm:gap-4 sm:grid-cols-2 md:grid-cols-3  gap-5 ">
        {computers?.slice(0, 6).map(tool => (
          <Computer tool={tool} key={tool._id}></Computer>
        ))}
      </div>
    </div>
  );
};

export default Computers;
