import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { SUMMARY_DATA } from '../../types';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  title: {
    display: true,
    text: 'Ratio in Global',
  },
  aspectRatio: 3,
  responsive: true,
};

const Chart = ({ data, isLoading }: SUMMARY_DATA) => {
  const { Global: { NewConfirmed = 0, NewRecovered = 0, NewDeaths = 0 } = {} } = data || {};

  return isLoading ? null : (
    <Doughnut
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            data: [NewConfirmed, NewRecovered, NewDeaths],
            backgroundColor: ['#ffad1f80', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
          },
        ],
      }}
      options={options}
    />
  );
};

export default Chart;
