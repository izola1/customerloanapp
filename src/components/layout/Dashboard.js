import React from "react";
import Customers from "../customers/Customers";
import Sidebar from "../layout/Sidebar";

export default function Dashboard() {
  return (
    <div className="row">
      <div className="col-md-10">
        <Customers />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  );
}
