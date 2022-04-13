//line chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['1800', '1825', '1850', '1875', '1900', '1925', '1950', '1975', '2000', '2021'],
        datasets: [{
            label: 'Brazil',
            data: [32, 32, 31.99, 32.06, 32.4, 32.75, 51.78, 63.65, 71.44, 76.33],
            fill: false,
            borderColor: 'rgb(3, 140, 51, 0.5)',
            backgroundColor: 'rgb(3, 140, 51)',
            tension: 0.1},
        {
            label: 'China',
            data: [32, 32, 32, 31.96, 31.75, 31.55, 40.73, 63.26, 70.03, 77.4],
            fill: false,
            borderColor: 'rgb(191, 35, 21, 0.5)',
            backgroundColor: '#BF2315',
            tension: 0.1},
        {
            label: 'India',
            data: [25.44, 25.44, 25.44, 25.11,18.37, 26.69, 34.92, 51.51, 62.34,69.77],
            fill: false,
            borderColor: 'rgb(217, 124, 43, 0.5)',
            backgroundColor: '#D97C2B',
            tension: 0.1},
        {
            label: 'Indonesia',
            data: [30, 30, 30, 30.04, 30.24, 30.43, 37.16, 56.49, 67.27, 72.51],
            fill: false,
            borderColor: 'rgb(191, 78, 99, 0.5)',
            backgroundColor: '#BF4E63',
            tension: 0.1},
        {
            label: 'United States',
            data: [39.41, 39.41, 39.41, 39.41, 48.92, 58.47, 68.07, 72.44, 76.9, 79.59],
            fill: false,
            borderColor: 'rgb(2, 48, 89, 0.5)',
            backgroundColor: '#023059',
            tension: 0.1}
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'How Has Life Expectancy Has Changed from 1800 to 2021?',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Over a 221-year period, the life expectancy in the five most populous countries in the world has increased by about 40 years'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});

//scatter plot
var ctx2 = document.getElementById('myChart2').getContext('2d');
      var myChart = new Chart(ctx2, {
          type: 'scatter',
          data: {
            datasets: [{
                data: [
                  {x: 71.5, y: 3678, country: "China"},
                ],
                label: "China",
                borderColor: "#18CBD9",
                backgroundColor: "rgb(24,203,217,0.1)",
                borderWidth:2,

              }, {
                data: [
                  {x: 61.1, y: 2548, country: "India"},
                ],
                label: "India",
                borderColor: "#09D95C",
                backgroundColor: "rgb(9,217,92,0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 77.1, y: 45986, country: 'United States'},
                ],
                label: "United States",
                borderColor: "#0A97F8",
                backgroundColor:"rgb(10,151,248,0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 68.3, y: 5878, country: "Indonesia"},
                ],
                label: "Indonesia",
                borderColor: "#BF4E63",
                backgroundColor:"rgb(2191,78,99,0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 71.9, y: 11461, country: "Brazil"},
                ],
                label: "Brazil",
                borderColor: "#038C33",
                backgroundColor:"rgb(3,140,51,0.1)",
                borderWidth:2,

              }, {
                data: [
                {x: 65.4, y: 13173, country: "Russia"},
                ],
                label: "Russia",
                borderColor: "#232CD9",
                backgroundColor:"rgb(35,44,217,0.1)",
                borderWidth:2,

              }, {
              data: [
              {x: 62.6, y: 3366, country: "Pakistan"},
              ],
              label: "Pakistan",
              borderColor: "#F8CE52",
              backgroundColor:"rgb(248,206,82,0.1)",
              borderWidth:2,

            }, {
              data: [
              {x: 65.8, y: 1632, country: "Bangladesh"},
              ],
              label: "Bangladesh",
              borderColor: "#6150D4",
              backgroundColor:"rgb(97,80,212,0.1)",
              borderWidth:2,

            }, {
              data: [
              {x: 81.1, y: 32193, country: "Japan"},
              ],
              label: "Japan",
              borderColor: "#EB0F00",
              backgroundColor:"rgb(235,15,0,0.1)",
              borderWidth:2,

              }
            ]
          },
          options: {
            plugins: {
              tooltip: {
                callbacks: {
                  label: (context) => {
                    console.log(context)
                    return context.raw.country;
                  }
                }
              }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });
