import React from "react";
import { Link } from "react-router-dom";

const Monitor = ({ monitorProduct }) => {
  const { name, img, price, minimumQuantity, display, ports, resolution } =
    monitorProduct;
  // console.log(monitorProduct);
  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img className="h-[250x] w-full" src={img} alt="Shoes" />
      </figure>

      <div class="card-body">
        <h2 class="card-title text-purple-600 text-1xl ">
          {name.slice(0, 30)}
        </h2>
        <h2 class="card-title">
          Price: <span className="text-2xl text-black">{price} টাকা</span>
        </h2>
        <h2 class="card-title text-sm text-black">Display: {display}</h2>
        <h2 class="card-title text-sm text-black">Ports: {ports}</h2>
        <h2 class="card-title text-sm text-black">resolution: {resolution}</h2>
        <h2 class="card-title">
          MinQuantity:{" "}
          <span className="text-lg text-black">{minimumQuantity}</span>
        </h2>
        <div class="card-actions justify-end">
          <Link to={`/monitor/${monitorProduct._id}`} class="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
