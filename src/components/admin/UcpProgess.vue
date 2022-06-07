<template>
    <canvas id="myChart1"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    mounted() {
        const ctx = document.getElementById('myChart1');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Front End', 'Django Backend', 'Client Area'],
                datasets: [{
                    label: 'Progress in %',
                    data: [20, 60, 50],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                animation: {
                    duration: 6000,
                    easing: 'easeOutSine',
                },

                indexAxis: 'y',
                scales: {

                    x: {
                        mix: 0,
                        max: 100,


                    },

                },
                elements: {
                    bar: {
                        borderWidth: 2,
                    }
                },

            },
        });
        myChart;
    }
}
</script>

