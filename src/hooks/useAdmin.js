import React, { useEffect, useState } from "react";

const useAdmin = user => {
  const [isAdmin, setIsAdmin] = useState(false);
 const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:5000/admin/${user?.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setIsAdmin(data.admin);
        setIsLoading(false)
      });
  }, []);
  return [isAdmin, isLoading];
};

export default useAdmin;
