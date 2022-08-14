import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../hooks/useFirebase";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // ================Send-server==============
  let maxQuantity = 200;
  const imgStoreKey = "428322d13b73eac9cb47c3c4911691c0";
  const onSubmit = data => {
    // console.log(data);
    const image = data.image[0];

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStoreKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(async result => {
        if (result.success) {
          const img = result.data.url;
          // console.log(img);

          const addProduct = {
            name: data.name,
            img: img,
            availableQuantity: data.availableQuantity,
            minimumQuantity: data.minimumQuantity,
            price: data.price,
            description: data.description
          };
          //
          // console.log('addproduct', addProduct);
          // send data server
          fetch(`https://laptop-1997.herokuapp.com/addProduct`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(addProduct),
          })
            .then(res => res.json())
            .then(data => {
              if(data.insertedId){
                toast.success("successfully added");
              //
                reset();
              }
             
            });
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl text-purple-600 font-bold w-2/3 p-3 my-3 rounded-full mx-auto">
        Add to Product Tools
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 justify-items-center "
      >
        <input
          class="input input-bordered w-full max-w-xs text-lg bg-success text-black font-bold"
         value={user?.displayName}
        />
        <input
          class="input input-bordered w-full max-w-xs text-lg bg-success text-black font-bold"
         value={user?.email}
        />
        <input
          class="input input-bordered w-full max-w-xs font-bold"
          placeholder="Tool name"
          type="text"
          {...register("name")}
          required
        />
        <input
          name="img"
          type="file"
          className="input input-bordered w-full max-w-xs"
          {...register("image", {
            required: {
              value: true,
              message: "Image is Required",
            },
          })}
        />
          <input
          class="input input-bordered w-full max-w-xs disabled text-lg bg-slate-500 text-white font-bold"
          value={`${maxQuantity} is availableQuantity`}
          placeholder="available Quantity"
          {...register("availableQuantity")}
          required
        />
        {/*  */}
        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="Your minimum Quantity"
          min="20"
          max="200"
          type="number"
          {...register("minimumQuantity")}
          required
        />
      
        {/* ========== */}

        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="Price"
          type="number"
          {...register("price")}
          required
        />
        <input
          class="input input-bordered w-full max-w-xs"
          placeholder="description here"
          type="text"
          {...register("description")}
          required
        />
        <input
          type="submit"
          value="AddProduct"
          class="input bg-purple-600 text-white font-bold text-2xl input-bordered w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default AddProduct;
