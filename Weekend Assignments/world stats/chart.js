
const ctx = document.getElementById("myChart").getContext("2d");

const config = {
  type: "line",
  data: {
    labels: [],
    // labels: [],
    datasets: [
      {
        label: "Population",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};
let myChart = new Chart(ctx, config);
export function displayChart(data) {
  const labels = [];
  const populations = [];
  // const countryLabels = countries.map((country) => country.name);
  // const countryPops = countries.map((country) => country.population);
  if (data) {
    data.forEach((element) => {
      labels.push(element.name);
      populations.push(element.population);
    });
  }
  // console.log(countryLabels, countryPops);
  config.data.labels = labels;
  config.data.datasets[0].data = populations;
  myChart.destroy();
  myChart = new Chart(ctx, config);
}
