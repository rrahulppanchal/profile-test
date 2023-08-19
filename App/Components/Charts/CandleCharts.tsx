import React from 'react';
import ReactApexChart from 'react-apexcharts';

const data = [
  { x: '2023-08-01', y: [100, 120, 90, 110] },
  { x: '2023-08-02', y: [110, 140, 100, 20] },
  { x: '2023-08-03', y: [110, 340, 50, 180] },
  { x: '2023-08-04', y: [110, 240, 10, 200] },
  { x: '2023-08-05', y: [110, 40, 300, 100] },
  { x: '2023-08-06', y: [120, 130, 110, 125] }
];

const CandlestickChart = () => {
  const options: any = {
    chart: {
      type: 'candlestick',
      height: 350,
      background: '#111'
    },
    xaxis: {
      type: 'category',
      labels: {
        style: {
          colors: '#adadad'
        }
      }
    },
    yaxis: {
      tooltip: {
        enabled: true
      },
      labels: {
        style: {
          colors: '#adadad'
        }
      }
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#00B746',
          downward: '#F45531'
        }
      }
    },
    theme: {
      mode: 'dark'
    }
  };

  const series = [
    {
      data: data.map((item) => ({
        x: item.x,
        y: item.y
      }))
    }
  ];

  return (
    <>
      <div className="text-color border border-secondary rounded p-3">
        <ReactApexChart options={options} series={series} type="candlestick" height={350} />
      </div>
    </>
  );
};

export default CandlestickChart;
