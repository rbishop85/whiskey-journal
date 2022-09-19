// Declare array to hold individual flavor values
const flavorValues = [];
// Add the values that are generated on page journal.handlebars page load to the array
flavorValues.push(floral, malty, peaty, fruity, feinty, winey, woody, sulphury);

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
      data: flavorValues,
      backgroundColor: [
        "rgb(238, 130, 238, 0.6)", // floral
        "rgb(218, 165, 32, 0.6)", // malty
        "rgb(34, 139, 34, 0.6)", // peaty
        "rgb(255, 68, 0, 0.6)", // fruity
        "rgb(0, 255, 255, 0.6)", // feinty
        "rgb(105, 90, 205, 0.6)", // winey
        "rgb(128, 0, 0, 0.6)", // woody
        "rgb(172, 255, 47, 0.6)", // sulphury
      ],
      borderColor: [
        "rgb(255, 255, 255, 0.45)"
      ],
    },
  ],
};

// Polar Area Chart
const config = {
  type: "polarArea",
  data: data,
  options: {},
};

const myChart = new Chart(document.getElementById("myChart"), config);