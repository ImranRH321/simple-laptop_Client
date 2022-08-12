import React from "react";
import { Link } from "react-router-dom";

const Tablet = ({tablet }) => {
  const { name, img, price, minimumQuantity } = tablet;
  // console.log(img);
  return (
    <div class="card w-96 sm:w-full sm:mx-5 bg-base-100 shadow-xl mx-auto ">
      <figure>
        <img className="h-[250x] w-full" src={img} alt="Shoes" />
      </figure>

      <div class="card-body">
        <h2 class="card-title text-purple-600 text-1xl ">{name.slice(0,20)}</h2>
        <h2 class="card-title">
          Price: <span className="text-3xl text-black sm:text-md">{price} টাকা</span>
        </h2>
        <h2 class="card-title">
          MinQuantity:{" "}
          <span className="text-2xl text-black">{minimumQuantity}</span>
        </h2>
        <div class="card-actions justify-end">
          <Link to={`/tablet/${tablet._id}`} class="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tablet;
