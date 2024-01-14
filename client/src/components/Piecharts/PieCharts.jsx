import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Typography from '@mui/material/Typography';
import "./PieCharts.css"

const PieCharts = () => {
  const seriesData = [
    { id: 0, value: 10,  },
    { id: 1, value: 15,  },
    { id: 2, value: 20,  },
  ];

  return (
    <div>
      <PieChart
        series={[
          {
            data: seriesData,
          },
        ]}
        width={400}
        height={200}
        disableLegend // disable default legend
      />
      
    </div>
  )
}

export default PieCharts;
