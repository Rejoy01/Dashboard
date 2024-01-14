import React from "react";
import "./LineCharts.css";
import { LineChart } from "@mui/x-charts/LineChart";

const LineCharts = () => {
    const data = [
        { month: 'Jan', rating: 5 },
        { month: 'Feb', rating: 15 },
        { month: 'Mar', rating: 10 },
        { month: 'Apr', rating: 20 },
        { month: 'May', rating: 5 },
        { month: 'Jun', rating: 15 },
        { month: 'Jul', rating: 10 },
        { month: 'Aug', rating: 20 },
        { month: 'Sep', rating: 5 },
        { month: 'Oct', rating: 15 },
        { month: 'Nov', rating: 10 },
        { month: 'Dec', rating: 20 },
      ];
  return (
    <div>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
};

export default LineCharts;
