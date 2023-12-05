import axios from "axios";
import "./../scss/style.scss";

const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/sweden?unitGroup=us&key=7XM4DW35YMGRS5CEQEZBH29FX&contentType=json";

const get = async () => {
  const response = await axios.get(url);
  console.log(response.data);
};

get();

const app = document.getElementById("app");
