import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Legend } from 'recharts';
import "./PieCharts.css"

const PieCharts = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      
      const response = await fetch('http://localhost:3001/api/pie-chart');
      const data = await response.json();

      
      setChartData(data.map((item, index) => ({
        id: index,
        value: item.value,
        label: `Category ${String.fromCharCode(65 + index)}`, // A, B, C, ...
      })));
    };

    fetchData();
  }, []); 

  const legendColors = ["#4af78a", "#80d1a6", "#a6f7c4", "#bff5d3", "#d2f7e0"];

  return (
    <div className='pie container'>
      <PieChart className='myChart'
        colors={["#4af78a", "#80d1a6", "#a6f7c4", "#bff5d3", "#d2f7e0"]}
        series={[
          {
            data: chartData,
          },
        ]}
        width={400}
        height={200}
      />
   
    </div>
  );
};

export default PieCharts;
