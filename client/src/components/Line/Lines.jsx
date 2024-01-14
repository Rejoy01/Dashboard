import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Typography from '@mui/material/Typography';
// import "./LineChart.css";

const LineChartDemo = () => {
  // Updated data for the line chart, starting from January
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

  const xAxisTicks = data.map(entry => entry.month);

  return (
    <div className="line-chart-container">
      <Typography variant="h6" gutterBottom>
        Employee Performance Ratings (Demo)
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <XAxis dataKey="month" ticks={xAxisTicks} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="rating" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartDemo;
