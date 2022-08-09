import React from "react";
import { useQuery } from "@tanstack/react-query";
import User from "./User";

const MakeAdmin = () => {
  // =====================
  const { data: users, isLoading, refetch } = useQuery(["user"], () =>
    fetch(`http://localhost:5000/user`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(res => res.json())
  );

  if (isLoading) return "Loading...";

  return (
    <div>
      <h1 className="my-5 text-bold text-center text-4xl text-purple-500">Make Admin Any User </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr className="font-bold text-secondary">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Deleted</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, ind) => (
              <User key={user._id} user={user} ind={ind} refetch={refetch}></User>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
