var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1800', '1825', '1850', '1875', '1900', '1925', '1950', '1975', '2000'],
    datasets: [{
      label: 'China',
      data: [32, 32, 32, 31.96, 31.75, 31.55, 40.73, 63.26, 70.03],
      fill: false,
      backgroundColor: '#00b159',
      borderColor: '#00b159'
    },
      {
        label: 'India',
        data: [22.44, 25.44, 25.44, 25.11, 18.37, 26.69, 34.92, 51.51, 62.34],
        fill: false,
        borderColor: '#00aebd',
        backgroundColor: '#00aebd'
      }
  ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Life expectancy in the five most populous countries in the world',
        font: {
          size: 18
        }
      },
      subtitle: {
        display: true,
        text: 'Life expectancy has risen steadily in the last 100 years'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
