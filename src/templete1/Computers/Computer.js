import React from "react";
import { Link } from "react-router-dom";
import '../Style/Style.css'

const Computer = ({ tool }) => {
  const { name, img, price, minimumQuantity } = tool;
  // console.log(img);
  return (
    <div class="card w-96 sm:w-full sm:mx-5 bg-base-100 shadow-xl mx-auto cp">
      <figure>
        <img className="h-[250x] w-full" src={img} alt="Shoes" />
      </figure>

      <div class="card-body ">
        <h2 class="card-title text-primary lg:text-1xl sm:text-md">{name.slice(0,20)}</h2>
        <h2 class="card-title">
          Price: <span className="text-3xl text-black sm:text-md">{price} ৳</span>
        </h2>
        <h2 class="card-title">
          MinQuantity:{" "}
          <span className="text-2xl text-primary">{minimumQuantity}</span>
        </h2>
        <div class="card-actions justify-end">
          <Link to={`/tools/${tool._id}`} class="btn btn-secondary">
           Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Computer;
