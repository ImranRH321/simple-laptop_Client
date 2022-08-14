import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../hooks/useFirebase";
import "../Style/Style.css";

const Main = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div class="hero min-h-screen bgMain">
        {/* <div class="grid gird-cols-1 md:grid-cols-2 justify-around gap-10"> */}
        <div class="flex justify-center items-center gap-20">
          <div>
            <img
              class="mask mask-circle w-24 mx-auto"
              src="https://i.gifer.com/Ry6p.gif"
              alt=""
            />
            {/* <h1 class="text-5xl font-bold text-center">{user?.displayName}</h1> */}
          </div>
          <div>
            <img
              class="mask mask-circle w-24 mx-auto"
              src={user?.photoURL}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
