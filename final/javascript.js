var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: '10-14 Year Olds',
            data: [51.3, 51.6, 52.2, 55.6, 47.7],
            fill: true,
            borderColor: 'rgba(217, 4, 43)',
            backgroundColor: 'rgba(217, 4, 43, 0.1)',
            tension: 0.1},
        {
            label: '15-19 Year Olds',
            data: [1927.3, 2072.3, 2114.1, 2156, 1835.9],
            fill: true,
            borderColor: 'rgba(168, 219, 251)',
            backgroundColor: 'rgba(168, 219, 251, 0.1)',
            tension: 0.1},
        {
            label: '20-24 Year Olds',
            data: [2686.1, 2853.7, 2931.7, 2931.7, 2660.6],
            fill: true,
            borderColor: 'rgba(234, 184, 64)',
            backgroundColor: 'rgba(234, 184, 64, 0.1)',
            tension: 0.1},
        {
            label: '25-29 Year Olds',
            data: [1302.6, 1377.2, 1415.7, 1448.6, 1265.3],
            fill: true,
            borderColor: 'rgba(54, 88, 191)',
            backgroundColor: 'rgba(54, 88, 191, 0.1)',
            tension: 0.1},
        {
            label: '30-34 Year Olds',
            data: [610.8, 657.4, 696.3, 729.7, 611.7],
            fill: true,
            borderColor: 'rgba(242, 116, 5)',
            backgroundColor: 'rgba(242, 116, 5, 0.1)',
            tension: 0.1},
        {
            label: '35-39 Year Olds',
            data: [320.9, 349.5, 362.2, 389.6, 340.7],
            fill: true,
            borderColor: 'rgba(145, 179, 127)',
            backgroundColor: 'rgba(145, 179, 127, 0.1)',
            tension: 0.1},
        {
            label: '40-44 Year Olds',
            data: [165.2, 185, 196.1, 215.9, 203.3],
            fill: true,
            borderColor: 'rgba(191, 159, 167)',
            backgroundColor: 'rgba(191, 159, 167, 0.1)',
            tension: 0.1},
        {
            label: '45-54 Year Olds',
            data: [75.5, 85.5, 92.1, 99, 98.8],
            fill: true,
            borderColor: 'rgba(242, 178, 121)',
            backgroundColor: 'rgba(242, 178, 121, 0.1)',
            tension: 0.1},
        {
            label: '55-64 Year Olds',
            data: [22.5, 27, 29.7, 32.9, 38.7],
            fill: true,
            borderColor: 'rgba(163, 149, 199)',
            backgroundColor: 'rgba(163, 149, 199, 0.1)',
            tension: 0.1},
        {
            label: '65+ Year Olds',
            data: [3.6, 4.3, 4.4, 5.1, 6.4],
            fill: true,
            borderColor: 'rgba(115, 39, 53)',
            backgroundColor: 'rgba(115, 39, 53, 0.1)',
            tension: 0.1}
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Reported Cases of Chlamydia by Age from 2016-2020',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: ''
            }
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
});
