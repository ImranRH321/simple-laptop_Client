import { useQuery } from "@tanstack/react-query";
import React from "react";
import ManageSingleProduct from "./ManageSingleProduct";

const ManageOrder = () => {
  const {
    data: manageProducts,
    isLoading,
    refetch,
  } = useQuery(["manageOrder"], () =>
    fetch("https://laptop-1997.herokuapp.com/manageOrder", {
      method: "GET",
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then(res => res.json())
  );

  if (isLoading) return "Loading...";
  // console.log(manageProducts);
  return (
    <div class="overflow-x-auto">
      <h1 className="my-5 text-bold text-center text-4xl font-bold text-purple-500">
        Manage All Product here 
      </h1>

      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>UserName</th>
            <th>ProductName</th>
            <th>Quantity</th>
            <th>price</th>
            <th>Shipped</th>
            <th>payment</th>
            <th>Deleted</th>
          </tr>
        </thead>
        <tbody>
          {manageProducts.map((data, i) => (
            <ManageSingleProduct
              data={data}
              key={data._id}
              i={i}
              refetch={refetch}
            ></ManageSingleProduct>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrder;
