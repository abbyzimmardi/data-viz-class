//bar chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-saharan Africa'],
    datasets: [{
      label: ['GDP'],
      data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
      backgroundColor: ['#A61723', '#5E7330', '#244274', '#FF540D', '#AEDFF2', '#F2B705']
    }
  ]
  },
  options: {
    responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'GDP Per Capita by Region',
          font: {
            size: 20
        }
      },
      subtitle: {
        display: true,
        text: 'The smallest gap in average GDP is between South Asia and Sub-saharan Africa, with a difference of 63.83'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
