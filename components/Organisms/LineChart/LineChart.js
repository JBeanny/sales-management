import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  defaults,
} from "chart.js";
import { Line } from "react-chartjs-2";

// import data and options
import { data, options } from "./data.js";

defaults.font.family = "Kantumruy";
defaults.color = "#6d28d9";
defaults.font.size = "16px";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const LineChart = () => {
  return <Line options={options} data={data} fallbackContent="Sales Data" />;
};

export default LineChart;
