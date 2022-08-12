import React, { useEffect, useState } from "react";

const useToken = user => {
  const [token, setToken] = useState("");
  //   console.log(user);
  const name = user?.user?.displayName;
  const email = user?.user?.email;
  const img = user?.user?.photoURL;

  const currentUser = {
    email: email,
    img: img,
    name: name,
  };
  // console.log(img, name);

  useEffect(() => {
    if (email) {
      const url = `https://laptop-1997.herokuapp.com/user?email=${email}`;
      fetch(url, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(currentUser),
      })
        .then(res => res.json())
        .then(data => {
          const token = data.token;
          setToken(token)
          // console.log(" token", token);
          localStorage.setItem('token', token);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
