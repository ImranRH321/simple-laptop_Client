import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LLMJnHSBkwSV8IkTMECV2W3r3HUStksNU6eiBNI1wmqSKW7LxERw8L7p7cryCr2UmekZL3zhyqZfaW8YcNXL3EQ00m1zFx96b"
);

const Payment = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  //
  useEffect(() => {
    fetch(`https://laptop-1997.herokuapp.com/payment/order/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        // console.log("payment data", data);
        setProduct(data);
      });
  }, [id]);

  return (
    <div>
      <h1>Payment here {id}</h1>
      <div class="card w-[400px] bg-base-100 shadow-xl my-10">
        <div class="card-body">
          <h2 class="card-title">{product.name}</h2>
          <h2 class="card-title">{product.email}</h2>
          <h2 class="card-title">Quantity: {product.quantity}</h2>
          {/* <h2 class="card-title">{product.productName?.slice(0.30)}</h2> */}
          <h2 class="card-title">Price: {product.price} টাকা</h2>
        </div>
      </div>
      {/* ... */}
      <div class="card w-[400px] bg-base-100 shadow-xl">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm product={product}/>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
