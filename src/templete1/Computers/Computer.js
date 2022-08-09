import React from "react";
import { Link } from "react-router-dom";
import '../Style/Style.css'

const Computer = ({ tool }) => {
  const { name, img, price, minimumQuantity } = tool;
  // console.log(img);
  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto cp">
      <figure>
        <img className="h-[250x] w-full" src={img} alt="Shoes" />
      </figure>

      <div class="card-body c">
        <h2 class="card-title text-warning text-1xl ">{name.slice(0,20)}</h2>
        <h2 class="card-title">
          Price: <span className="text-3xl text-warning">{price} ৳</span>
        </h2>
        <h2 class="card-title">
          MinQuantity:{" "}
          <span className="text-2xl text-warning">{minimumQuantity}</span>
        </h2>
        <div class="card-actions justify-end">
          <Link to={`/tools/${tool._id}`} class="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Computer;