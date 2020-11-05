import { ChartDataSets, ChartOptions } from 'chart.js';

export const chartOptions: ChartOptions = {
  responsive: true,
  legend: {
    display: false
  },
  scales:{
    yAxes: [
      {
        ticks:{
          autoSkip: true,
          maxTicksLimit: 10,
          beginAtZero: true
        }
      }
    ],
    xAxes: [
      {
        gridLines: {
          display: false
        }
      }
    ]
  }
};

export const firstChartStyle: ChartDataSets = {
  backgroundColor: '#ff7a7f',
  borderWidth: 3
};

export const secondChartStyle: ChartDataSets = {
  backgroundColor: '#7a7eff',
  borderWidth: 3
};