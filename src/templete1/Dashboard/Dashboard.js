import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import auth from "../../hooks/useFirebase";
import "../Style/Style.css";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [isAdmin] = useAdmin(user);

  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-4xl font-bold">Dashboard </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80  p text-base-content">
          {/* <!-- Sidebar content here --> */}

          {/* <div className="border-red-300">
            <img
              class="mask mask-circle w-24 mx-auto"
              src={user?.photoURL}
              alt=""
            />
            <p className="font-bold">
              <span>{user?.displayName}</span>
              <br />
              <span>{user?.email}</span>
            </p>
          </div> */}
          <li>
            <Link className="d" to="/dashboard">
              Dashboard Banner
            </Link>
          </li>
          <li>
            <Link className="d" to="/dashboard/myProfile">
              MyProfile
            </Link>
          </li>
          <li>
            <Link className="d" to="/dashboard/orders">
              Orders
            </Link>
          </li>
          <li>
            <Link className="d" to="/dashboard/add/review">
              addReview
            </Link>
          </li>
          <li>
            <Link className="d" to="/dashboard/manageOrder">
              ManageOrder
            </Link>
          </li>
          <li>
            <Link className="d" to="/dashboard/addProduct">
              AddProduct
            </Link>
          </li>
          <li>
            <Link className="d" to="/dashboard/makeAdmin">
              makeAdmin
            </Link>
          </li>
          {/* pore route gula tik korbo */}
          {isAdmin && (
            <>
              <li>
                <Link className="d" to="/dashboard/makeAdmin">
                  makeAdmin
                </Link>
              </li>
              {/* <li>
                <Link className="d" to="/dashboard/manageOrder">
                  ManageOrder
                </Link>
              </li> */}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
