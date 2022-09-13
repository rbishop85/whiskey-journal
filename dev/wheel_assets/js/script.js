const data = {
  labels: [
    "Floral",
    "Malty",
    "Peaty",
    "Fruity",
    "Feinty",
    "Winey",
    "Woody",
    "Sulphury",
  ],
  datasets: [
    {
      label: "Flavor Profile",
      data: [3, 4, 5, 6, 7, 8, 9, 10],
      backgroundColor: [
        "rgb(227, 186, 252)",
        "rgb(186, 234, 252 )",
        "rgb(209, 252, 186 )",
        "rgb(252, 252, 186 )",
        "rgb(252, 197, 186 )",
        "rgb(252, 186, 241 )",
        "rgb(250, 118, 136 )",
        "rgb(86, 134, 247 )",
      ],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
};

const myChart = new Chart(document.getElementById("myChart"), config);
