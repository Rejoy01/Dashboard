import React from "react";
import LineCharts from "../LineCharts/LineChart";
import PieCharts from "../Piecharts/PieCharts";
import "./Dashboard.css";

import Table from "../Table/Table";
import ProfileCard from "../ProfileCard/ProfileCard";



const Dashboard = () => {
    

    const tableData = [
        { id: 1, name: 'Product A', quantity: 10, price: 29.99 },
        { id: 2, name: 'Product B', quantity: 5, price: 14.99 },
        { id: 3, name: 'Product C', quantity: 8, price: 19.99 },
        { id: 4, name: 'Product D', quantity: 3, price: 9.99 },
        { id: 5, name: 'Product E', quantity: 12, price: 39.99 },
      ];

      const graphData = [
        { x: 'Jan', y: 10 },
        { x: 'Feb', y: 15 },
        { x: 'Mar', y: 8 },
        { x: 'Apr', y: 12 },
        { x: 'May', y: 18 },
      ];

  return (
    <div className="DashBoard">
      <div className="Charts">
        <div className="L">
          {/* <LineCharts data={graphData}/> */}
          {/* <ApexChart /> */}
          {/* <Lines /> */}
        </div>
        <div className="P">
          <PieCharts />
        </div>
      </div>

      <div className="pro-sec">
        <div className="p-table">
            <Table data={tableData} />
        </div>
        <div className="ProfileCard-sec">
            <ProfileCard />

        </div>
            
      </div>
    </div>
  );
};

export default Dashboard;
