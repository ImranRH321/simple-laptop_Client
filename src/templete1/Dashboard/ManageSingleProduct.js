import React, { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ManageSingleProduct = ({ data, i, refetch }) => {
  const {
    productName,
    price,
    quantity,
    _id,
    address,
    phone,
    name,
    email,
    status,
    payment,
    date,
  } = data;
  // console.log(data);
  //
  const handleProductDeleted = () => {
    fetch(`https://laptop-1997.herokuapp.com/manageOrder/${_id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        // console.log("manage", data);
        if (data.deletedCount) {
          refetch();
          toast.success("Deleted user");
        }
      });
  };

  /* payOut status change */
  const handlePayOutButton = () => {
    fetch(`https://laptop-1997.herokuapp.com/managePayOut/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then(res => res.json())
      .then(data => {
        console.log("manage", data);
        refetch();
        if (data.deletedCount) {
          toast.success("Deleted user");
        }
      });
  };

  return (
    <tr>
      <th>{i}</th>
      <td className="font-bold text-secondary">
        {name}
        <br />
        <span>{email}</span>
      </td>
      <td className="font-bold">
        {productName?.slice(0, 25)}
        <br />
        <span className=" text-purple-600">address: {address} </span>
        <br /> <span>{date}</span>
      </td>
      <td>
        Quantity:{" "}
        <span className="font-bold text-primary text-lg">{quantity} pics</span>{" "}
        <br /> <span className="font-bold">Phone: {phone}</span>
      </td>
      <td className="text- font-bold">{price} টাকা</td>
      {/* ========================= */}
      {payment === "paid" ? (
        <td>
          <span className="font-bold">{status}</span>
        </td>
      ) : (
        <td>
          <span className="font-bold">unpaid</span>
        </td>
      )}
      {/* ========================= */}
      {payment === "paid" && (
        <td>
          <button
            onClick={handlePayOutButton}
            className="btn btn-xs btn-success"
          >
            Approve
          </button>
        </td>
      )}
      {/* ========================= */}
      {payment === "unpaid" && (
        <td>
          <button
            onClick={handleProductDeleted}
            className="btn btn-xs btn-error"
          >
            Deleted
          </button>
        </td>
      )}
      <td></td>
    </tr>
  );
};

export default ManageSingleProduct;
