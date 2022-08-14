import React, { useContext, useEffect, useState } from "react";

const useAdmin = user => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  console.log(user);

  useEffect(() => {
    if (user) {
      fetch(`https://laptop-1997.herokuapp.com/admin/${user?.email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then(res => res.json())
        .then(data => {
          console.log("admin  data", data);
          setIsAdmin(data.admin);
          //
          setIsLoading(false);
        });
    }
  }, [user]);
  return [isAdmin, setIsAdmin, isLoading];
};

export default useAdmin;
