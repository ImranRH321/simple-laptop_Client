import React from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const User = ({ user, ind, refetch }) => {
  const { name, email, role, _id } = user;

  const handleAdmin = () => {
    fetch(`https://laptop-1997.herokuapp.com/user/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        if (data.modifiedCount || data.matchedCount) {
          refetch();
          toast.success("successfully make admin add");
        } else {
          toast.error("flied to make and admin");
        }
      });
  };

  // 
  const userHandleDelete = () => {
    alert( _id);
    fetch(`https://laptop-1997.herokuapp.com/user/${_id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        console.log("delete", data);
        if (data.deletedCount) {
          refetch();
          toast.success("Deleted user");
        } 
      });
  }


  return (
    <tr className="font-bold text-primary">
      <th>{ind + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={handleAdmin} class="btn btn-xs btn-success">
            MakeAdmin
          </button>
        )}
      </td>
      <td>
        <button onClick={userHandleDelete} class="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default User;
