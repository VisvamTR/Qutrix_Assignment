import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ChartComponent = () => {
  const [xData, setXData] = useState('');
  const [yData, setYData] = useState('');
  const [chartData, setChartData] = useState(null);

  const handlePlot = () => {
    const xValues = xData.split(',').map(Number);
    const yValues = yData.split(',').map(Number);

    // Create the data points for the chart
    const dataPoints = xValues.map((x, index) => ({ x, y: yValues[index] }));

    // Create the chart data
    const data = {
      datasets: [
        {
          label: 'Graph Plot',
          data: dataPoints,
          borderColor: '#e00719',
          borderWidth: 2,
          // fill: false,
        },
      ],
    };

    setChartData(data);
  };    

  return (
    <div>
      <h2>Plot a Graph</h2>
      <div>
        <label>
          X - axis Data : 
          <input
            type="text"
            value={xData}
            onChange={(e) => setXData(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Y - axis Data : 
          <input
            type="text"
            value={yData}
            onChange={(e) => setYData(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handlePlot}>Plot</button>
      {chartData && <Line data={chartData} options={{ scales: { x: { type: 'linear', position: 'bottom' } } }} />}
    </div>
  );
};

export default ChartComponent;
