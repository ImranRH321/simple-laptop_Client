import React from "react";
import { Link } from "react-router-dom";
import '../Style/Style.css'

const Tablet = ({tablet }) => {
  const { name, img, price, minimumQuantity } = tablet;
  // console.log(img);
  return (
    <div class="card w-96 sm:w-full sm:mx-5 cp shadow-xl mx-auto ">
      <figure>
        <img className="h-[250x] w-full" src={img} alt="Shoes" />
      </figure>

      <div class="card-body">
        <h2 class="card-title text-purple-600 text-1xl ">{name.slice(0,20)}</h2>
        <h2 class="card-title">
          Price: <span className="md:text-2xl text-black sm:text-md">{price} টাকা</span>
        </h2>
        <h2 class="card-title">
          MinQuantity:{" "}
          <span className="text-2xl text-black">{minimumQuantity}</span>
        </h2>
        <div class="card-actions justify-start">
          <Link to={`/tablet/${tablet._id}`} class="btn btn-secondary btn-sm text-muted">
           Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tablet;
