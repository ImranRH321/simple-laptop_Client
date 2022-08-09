import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../hooks/useFirebase";

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const logOut = () => {
    localStorage.removeItem("token");
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <Link className="a mx-4 font-bold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="a mx-4 font-bold" to="/computers">
          Laptop
        </Link>
      </li>
      <li>
        <Link className="a mx-4 font-bold" to="/monitors">
          Monitors
        </Link>
      </li>
      <li>
        <Link className="a mx-4 font-bold" to="/tablets">
          Tablets
        </Link>
      </li>
      <li>
        <Link className="a mx-4 font-bold" to="/dashboard">
          Dashboard
        </Link>
      </li>
      <li>
        <Link className="a mx-4 font-bold" to="/login">
          Login
        </Link>
      </li>
    </>
  );

  return (
    <div class="navbar px-12 b">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="text-black bg-black menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" class="text-2xl font-bold text-warning capitalize">
          Laptop@Shorom
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div class="navbar-end">
        <div>
          {/*  */}
          <label for="my-drawer-2" tabindex="1" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <div class="dropdown dropdown-end  border-red-900">
          {user && (
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                {user && (
                  <>
                    <img src={user.photoURL} alt="loading img" />
                  </>
                )}
              </div>
            </label>
          )}
          {user && (
            <ul
              tabindex="1"
              class="w-[260px] text-black bg-white menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box"
            >
              {user && (
                <li>
                  <>
                    <div class="avatar grid grid-cols-1">
                      <div class="w-24 rounded-full mx-auto bg-neutral-focus">
                        <img
                          className="w-50"
                          src={user?.photoURL}
                          alt="loading img"
                        />
                      </div>
                      <p className="font-bold text-primary">{user?.displayName}</p>
                      <p className="font-bold text-primary">{user?.email}</p>
                    </div>
                  </>
                </li>
              )}
                <div class="divider">OR</div>
              <li>
                <Link className="b a w-full  my-1 mx-auto font-bold" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className="b a w-full  my-1 mx-auto font-bold "
                  to="/dashboard/myProfile"
                >
                  myProfile
                </Link>
              </li>
              <li>
                <Link
                  className="b a w-full  my-1 mx-auto font-bold "
                  to="/dashboard/orders"
                >
                  Order
                </Link>
              </li>
              <li>
                <Link
                  className="b a w-full  my-1 mx-auto font-bold "
                  to="/dashboard/add/review"
                >
                  Add review
                </Link>
              </li>

              <li>
                {/* <button class="btn btn-xs">Tiny</button> */}
                <button
                  onClick={() => logOut()}
                  className="btn btn-xs btn-error mb-4 mt-2 w-3/5 pb-6 mx-auto"
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
