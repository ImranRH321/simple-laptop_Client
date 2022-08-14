import React from "react";
import { Link } from "react-router-dom";
import '../Style/Style.css'

const Monitor = ({ monitorProduct }) => {
  const { name, img, price, minimumQuantity, display, ports, resolution } =
    monitorProduct;
  // console.log(monitorProduct);
  return (
    <div class="card w-96 sm:w-full  sm:mx-5 bg-base-600 cp shadow-xl mx-auto border-gray-400">
      <figure>
        <img className="h-[250x] w-full" src={img} alt="Shoes" />
      </figure>

      <div class="card-body m-0 p-3">
        <h2 class="card-title text-lg text-primary">
          {name.slice(0, 20)}
        </h2>
        <h2 class="card-title">
          Price:{" "}
          <span className="text-2xl text-black  lg:text-2xl">{price} ৳</span>
        </h2>
        <h2 class="card-title text-sm text-black">Display: {display}</h2>
        <h2 class="card-title text-sm text-black">Ports: {ports}</h2>
        <h2 class="card-title text-sm text-black">resolution: {resolution}</h2>
        <h2 class="card-title">
          MinQuantity:{" "}
          <span className="text-lg text-black">{minimumQuantity}</span>
        </h2>
        <div class="card-actions justify-end m-0">
          <Link to={`/monitor/${monitorProduct._id}`} class="btn btn-sm w-full  mx-auto h-[30px]  btn-secondary">
           Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
