import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../hooks/useFirebase";
import DeleteOrderModal from "./DeleteOrderModal";
import Order from "./Order";

const Orders = () => {
  const [user] = useAuthState(auth);
  const [modalOrder, setModalOrder] = useState(null);
  const email = user?.email;
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["order"], () =>
    fetch(`http://localhost:5000/order/${email}`).then(res => res.json())
  );

  if (isLoading) return "Loading...";

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr className="font-bold text-primary">
            <th></th>
            <th>Email</th>
            <th>PdName</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Paid</th>
            <th>Payment</th>
            <th>Deleted</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, ind) => (
            <Order
              setModalOrder={setModalOrder}
              order={order}
              key={order._id}
              ind={ind}
            ></Order>
          ))}
        </tbody>
      </table>

      {modalOrder && (
        <DeleteOrderModal
          setModalOrder={setModalOrder}
          modalOrder={modalOrder}
          refetch={refetch}
        ></DeleteOrderModal>
      )}
    </div>
  );
};

export default Orders;
