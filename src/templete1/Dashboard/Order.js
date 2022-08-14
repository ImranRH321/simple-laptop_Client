import React, { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Order = ({ order, setModalOrder }) => {
  const { productName,name, email, price, quantity, _id, paid, transactionId, payment , date} =
    order;
  const navigate = useNavigate();
  // console.log("order", order);
  const handlePaymentButton = () => {
    navigate(`/dashboard/payment/${_id}`);
  };
  return (
    <tr className="font-bold">
      <th>1</th>
      <td className="font-bold text-primary">{name} <br /> <span>{email}</span></td>
      <td className="text-secondary">{productName?.slice(0, 25)} <br /> <span>{date}</span></td>
      <td>Quantity: <span className="font-bold text-primary">{quantity} Pics</span></td>
      <td className="text-grey">Price: {price} টাকা</td>
      <td>{payment}</td>
      {
        (payment === "unpaid" && (
          <td>
            <button
              onClick={handlePaymentButton}
              className="btn btn-xs btn-primary "
            >
              Payment
            </button>
          </td>
        ))
      }

      {payment === "unpaid" && (
        <td>
          <label
            onClick={setModalOrder(order)}
            for="my-modal"
            class="btn btn-xs btn-error"
          >
            Deleted
          </label>
        </td>
      )}
    </tr>
  );
};

export default Order;
