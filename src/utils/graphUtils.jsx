import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie, Doughnut } from 'react-chartjs-2';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

// Your renderGraph function
export const renderGraph = (type, data) => {
  switch (type) {
    case 'pie':
      return <Pie data={data} />;
    case 'doughnut':
      return <Doughnut data={data} />;
    default:
      return null;
  }
};
