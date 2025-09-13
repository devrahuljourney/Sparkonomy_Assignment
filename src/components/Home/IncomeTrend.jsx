import React from 'react';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  BarController,
  LineController,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  BarController,
  LineController,
  Tooltip,
  Legend
);

export default function IncomeTrend() {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        type: 'line',
        label: 'MoM Growth',
        data: [50, 25, 40, -50, 100, -83.33],
        borderColor: '#e74c3c',
        yAxisID: 'y1',
        tension: 0.1,
      },
      {
        type: 'bar',
        label: 'Income',
        data: [4000, 5000, 7000, 3000, 6000, 1000],
        backgroundColor: '#9b59b6',
        yAxisID: 'y',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: 'bottom' } },
    scales: {
      y: { min: 0, max: 8000 },
      y1: { min: -100, max: 100, display: false },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full mx-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-1">Income Trend</h2>
      <p className="text-sm text-gray-500 mb-4">Monthly income and growth for the last 6 months.</p>
      <div className="h-80">
        <Chart type="bar" data={chartData} options={options} />
      </div>
    </div>
  );
}
