import logo from "./logo.svg";
import "./App.css";
import Home from "./templete1/Home/Home";
import Navbar from "./templete1/Home/Navbar";
import { Routes, Route } from "react-router-dom";
import Computers from "./templete1/Computers/Computers";
import Purchase from "./templete1/Purchase/Purchase";
import Login from "./templete1/Login/Login";
import Register from "./templete1/Login/Register";
import RequireAuth from "./templete1/Shared/RequireAuth";
import Dashboard from "./templete1/Dashboard/Dashboard";
import Orders from "./templete1/Dashboard/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./templete1/Dashboard/Main";
import AddReview from "./templete1/Dashboard/AddReview";
import MyProfile from "./templete1/Dashboard/MyProfile";
import MakeAdmin from "./templete1/Dashboard/MakeAdmin";
import RequireAdmin from "./templete1/Shared/RequireAdmin";
import Payment from "./templete1/Dashboard/Payment";
import ManageOrder from "./templete1/Dashboard/ManageOrder";
import Monitors from "./templete1/Monitors/Monitors";
import DetailsMonitor from "./templete1/Monitors/DetailsMonitor";
import Tablets from "./templete1/Tablets/Tablets";
import TabletDetails from "./templete1/Tablets/TabletDetails";
import AddProduct from "./templete1/Dashboard/AddProduct";
import NotFound from "./templete1/Shared/NotFound";
import { createContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "./hooks/useAdmin";
import auth from "./hooks/useFirebase";

// context
export const AdminContext = createContext();

function App() {
  const [user] = useAuthState(auth);
  const admin = useAdmin(user);
  return (
    <div className="App">
      <AdminContext.Provider value={admin}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/computers" element={<Computers />} />
          <Route
            path="/tools/:toolId"
            element={
              <RequireAuth>
                <Purchase />
              </RequireAuth>
            }
          />
          <Route path="/monitors" element={<Monitors />} />
          <Route
            path="/monitor/:toolId"
            element={
              <RequireAuth>
                <DetailsMonitor></DetailsMonitor>
              </RequireAuth>
            }
          />
          <Route path="/tablets" element={<Tablets />} />
          <Route
            path="/tablet/:toolId"
            element={
              <RequireAuth>
                <TabletDetails></TabletDetails>
              </RequireAuth>
            }
          />
          {/* dashboard  */}
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          >
            <Route index element={<Main />} />
            <Route path="orders" element={<Orders />} />
            <Route path="payment/:id" element={<Payment />} />
            <Route path="myProfile" element={<MyProfile />} />
            <Route path="add/review" element={<AddReview />} />
            <Route path="manageOrder" element={<ManageOrder />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route
              path="makeAdmin"
              element={
                <RequireAdmin>
                  <MakeAdmin />
                </RequireAdmin>
              }
            />
          </Route>
          {/*  */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </AdminContext.Provider>
    </div>
  );
}

export default App;
