import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LineCharts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/api/graph");
      const apiData = await response.json();

      const zeroFilledData = fillZeroValues(apiData);

      setData(zeroFilledData);
    };

    fetchData();
  }, []);

  const fillZeroValues = (apiData) => {
    // Define all months
    const allMonths = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const apiDataMap = new Map(apiData.map((item) => [item.x, item.y]));

    const zeroFilledData = allMonths.map((month) => ({
      x: month,
      y: apiDataMap.has(month) ? apiDataMap.get(month) : 0,
    }));

    return zeroFilledData;
  };

  return (
    <div>
      <ResponsiveContainer width={500} height={300} >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="y"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineCharts;
