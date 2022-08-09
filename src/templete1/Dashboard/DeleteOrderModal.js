import React from "react";
import { toast } from "react-toastify";

const DeleteOrderModal = ({ modalOrder, refetch }) => {
  const { productName, _id } = modalOrder;

  const makeDelete = () => {
    const url = `http://localhost:5000/order/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          toast.success("deleted product");
          refetch()
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h1 className="text-red-600 text-5xl py-2">Are You Sure Deleted</h1>
          <div class="modal-action">
            <label
              onClick={makeDelete}
              for="my-modal"
              class="btn btn-xs btn-error"
            >
              Delete
            </label>
            <label for="my-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderModal;
