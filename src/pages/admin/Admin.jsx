import React from "react";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Navigation />
      <div className="overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
