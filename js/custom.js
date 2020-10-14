new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [1500,1600,1700,1750,1800,],
      datasets: [{ 
          data: [500,999,1345,1897,2300],
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Last 30 Days'
      }
    }
  });