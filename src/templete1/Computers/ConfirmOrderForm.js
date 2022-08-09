import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../hooks/useFirebase";
import {toast } from 'react-toastify';

const ConfirmOrderForm = ({ toolDetail }) => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();

  const {name, price, minimumQuantity, availableQuantity, img } = toolDetail;
// 
const time = new Date().toLocaleDateString()
console.log(toolDetail);
  const onSubmit = data => {
    console.log(data);
    const inpQuantity = parseInt(data.quantity);
    const inpPrice = parseFloat(price) * inpQuantity;
    
    const order = {
      payment: 'unpaid',
      img:img,
      date: time,
      name: user?.displayName,
      email: user?.email,
      productName: name, 
      address: data.address,
      phone: data.phone,
      quantity: data.quantity,
      price: inpPrice
    } 
 console.log('order--------> ', order);
    /* send to the server  */
    fetch('http://localhost:5000/order', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(booking => {
      //  console.log('booking', booking);
       if(booking.insertedId){
        toast.success('successfully booked data')
         reset()
       }
    })
    // 
  };

  return (
    <div className="my-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 justify-items-center "
      >
        <input
          class="input input-bordered w-full max-w-xs font-bold text-1xl"
          type="text"
          value={user?.displayName}
          disabled
        />
        <input
          class="input input-bordered w-full max-w-xs font-bold"
          placeholder="Your email"
          type="email"
          value={user?.email}
          disabled
        />
        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="Your address"
          type="text"
          {...register("address")}
          required
        />
        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="Phone Number.."
          type="number"
          {...register("phone")}
          required
        />
        {/* quantity ============== */}
        {/* https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_number */}
        {/* <p class="text-lg text-start">{inpPrice}</p> */}

        <input
          {...register("quantity")}
          type="number"
          min="20"
          max="200"
          placeholder="quantity here."
          class="input input-bordered w-full max-w-xs"
        />
        {/* ===================== */}
        <input
          type="submit"
          value="Order"
          class="input btn-success text-black font-bold text-2xl input-bordered w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default ConfirmOrderForm;
