import React, { useEffect, useState } from "react";
import Monitor from "./Monitor";

const Monitors = () => {
  const [monitors, setMonitors] = useState([]);
  useEffect(() => {
    fetch("https://laptop-1997.herokuapp.com/monitor")
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setMonitors(data);
      });
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-5xl text-center text-primary  font-bold p-2 my-7">
        Monitors Service
      </h1>

      <div className="grid grid-cols-1 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {monitors.map(monitorProduct => (
          <Monitor
            monitorProduct={monitorProduct}
            key={monitorProduct._id}
          ></Monitor>
        ))}
      </div>
    </div>
  );
};

export default Monitors;
