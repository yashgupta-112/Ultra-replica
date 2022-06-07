<template>
    <canvas id="radar-chart" max-height="100" width="100" ></canvas>
</template>


<script>
import Chart from 'chart.js/auto';
export default {
    mounted(){
        
new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: ["Jan", "Feb", "March", "April", "May"],
      datasets: [
        {
          label: "Rare-Spike",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [48.77,55.61,21.69,46.62,26.82]
        }, {
          label: "Average",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
         
          data: [25.48,54.16,7.61,8.06,4.45]
        }
      ]
    },
    options: {
     animation:{
                duration:8000,
                easing:'easeInBounce',
            },
    }
});
Chart;
    }
}
</script>