import faker from "faker";

// chart options
export const options = {
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          family: "Kantumruy",
        },
      },
    },
    tooltip: {
      bodyFont: {
        family: "Kantumruy",
      },
      titleFont: {
        family: "Kantumruy",
      },
    },
    title: {
      display: true,
      text: "ស្ថិតិការលក់ប្រចាំឆ្នាំ",
    },
  },
  scales: {
    yAxes: {
      grid: {
        display: false,
        color: "#6d28d9",
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 2,
        backdropPadding: 2,
        backdropColor: "rgba(255,255,255,1)",
        color: "#6d28d9",
        font: {
          family: "Kantumruy",
          size: 12,
        },
      },
    },
    xAxes: {
      grid: {
        display: false,
        zeroLineColor: "transparent",
      },
      ticks: {
        color: "#6d28d9",
        font: {
          family: "Kantumruy",
          size: 12,
        },
      },
    },
  },
};

//xAxis
const labels = [
  "មករា",
  "កុម្ភះ",
  "មិនា",
  "មេសា",
  "ឧសភា",
  "មិថុនា",
  "កក្កដា",
  "សីហា",
  "កញ្ញា",
  "តុលា",
  "វិច្ឆិការ",
  "ធ្នូ",
];

//yAxis
export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "ប្រាក់ចំណូល",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "#6d28d9",
      backgroundColor: "#f5f3ff",
    },
  ],
};
