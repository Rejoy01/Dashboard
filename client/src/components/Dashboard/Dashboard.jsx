import React from "react";
import LineCharts from "../LineCharts/LineChart";
import PieCharts from "../Piecharts/PieCharts";
import "./Dashboard.css";
import Lines from "../Line/Lines";


const Dashboard = () => {
  return (
    <div className="DashBoard">
      <div className="Charts">
        <div className="L">
          <LineCharts />
          {/* <Lines /> */}
        </div>
        <div className="P">
          <PieCharts />
        </div>
      </div>
      <div className="Table">
        
      </div>
    </div>
  );
};

export default Dashboard;
