import React from "react";
import LineCharts from "../LineCharts/LineChart";
import PieCharts from "../Piecharts/PieCharts";
import "./Dashboard.css";

import Table from "../Table/Table";
import ProfileCard from "../ProfileCard/ProfileCard";

const Dashboard = () => {
  return (
    <div className="DashBoard container">
      <div className="Charts ">
        <div className="L">
          <LineCharts />
        </div>
        <div className="P">
          <PieCharts />
        </div>
      </div>

      <div className="pro-sec ">
        <div className="p-table">
          <Table />
        </div>
        <div className="ProfileCard-sec ">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
