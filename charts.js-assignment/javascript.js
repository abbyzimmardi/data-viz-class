//bar chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['15', '16', '17', '14', '18'],
        datasets: [{
            label: 'Men',
            data: [30, 28, 25, 12, 12, 10],
            backgroundColor: [
                '#74B5E0'
            ]
        },
        {
            label: 'Women',
            data: [2, 0, 2, 2, 0, 0],
            backgroundColor: [
                '#E05E75'
            ]
        },
        {
            label: 'Unidentified',
            data: [0, 1, 0, 2, 2, 9],
            backgroundColor: [
                '#F7D36F'
            ]
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'People Who have Committed School Shootings in the United States by Age, Gender',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'From the 1999 Columbine shooting to 2019, the five age groups with the largest number of people who have committed school shootings are 18 and younger.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                stacked: true
            },
            x: {
                stacked: true
            }
        },
    },
});

//radar chart

var ctx2 = document.getElementById('myChart2').getContext('2d');
      var myChart = new Chart(ctx2, {
          type: 'radar',
          data: {
            labels: [
              'Department Issued',
              'Family Member',
              'Legally Purchased by Shooter',
              'Stolen',
              'Police Weapon'
            ],
            datasets: [{
              label: 'California',
              data: [2, 3, 1, 0, 2],
              fill: true,
              backgroundColor: 'rgba(27, 89, 36, 0.1)',
              borderColor: 'rgb(27, 89, 36)',
              pointBackgroundColor: 'rgb(27, 89, 36)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(27, 89, 36)'
            },
            {
              label: 'Florida',
              data: [0, 2, 2, 1, 1],
              fill: true,
              backgroundColor: 'rgba(217, 187, 37, 0.1)',
              borderColor: 'rgb(217, 187, 37)',
              pointBackgroundColor: 'rgb(217, 187, 37)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(217, 187, 37)'
            },
            {
              label: 'Texas',
              data: [1, 2, 1, 0, 1],
              fill: true,
              backgroundColor: 'rgba(166, 38, 72, 0.1)',
              borderColor: 'rgb(166, 38, 72)',
              pointBackgroundColor: 'rgb(166, 38, 72)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(166, 38, 72)'
            },
              {
                label: 'North Carolina',
                data: [0, 0, 0, 1, 0],
                fill: true,
                backgroundColor: 'rgba(32, 68, 140, 0.1)',
                borderColor: 'rgb(32, 68, 140)',
                pointBackgroundColor: 'rgb(32, 68, 140)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(32, 68, 140)'
            },
            {
              label: 'Pennsylvania',
              data: [0, 2, 1, 0, 0],
              fill: true,
              backgroundColor: 'rgba(94, 136, 191, 0.1)',
              borderColor: 'rgb(94, 136, 191)',
              pointBackgroundColor: 'rgb(94, 136, 191)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(94, 136, 191)'
          }]
          },
          options: {
            responsive: true,
            plugins: {
            title: {
              display: true,
              text: 'Weapon Sources of People Who Committed School Shootings in the United States'
            },
          subtitle: {
              display: true,
              text: 'The top five states with the most school shootings from 1999-2019 and the source of the weapons used in the shootings.'
          },
            elements: {
              line: {
                borderWidth: 3
              }
            }
          }
        }
        });
