const data = {
    labels: ['Monday', 'Tuesday', 'Wednessday', 'Thrusday', 'Friday'],
    datasets: [{
        label: 'Tempreture in degree',
        backgroundColor: 'rgba(75, 192, 20, 0.2)',
        borderColor: 'rgba(75, 192, 20, 1)',
        borderWidth: 1,
        data: [6, 7, 15, 8, 20],
    }],
};


const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Monthly Sales Data',
            },
        },
    },
};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, config);


myChart.options.plugins.tooltip = {
    callbacks: {
        label: function (context) {
            return `Sales: ${context.parsed.y}`;
        },
    },
};


const chartAnimation = anime({
    targets: myChart.data.datasets[0].data,
    easing: 'linear',
    delay: anime.stagger(200),
    duration: 1000,
    loop: true,
    direction: 'alternate',
    update: function (anim) {
        myChart.update();
    },
});
