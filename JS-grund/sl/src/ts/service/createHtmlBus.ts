import { IResponseData } from "../models/IResponseData";

export const createHtmlBuses = (sl: IResponseData) => {
  const buses = sl.Buses;
  const slContainer = document.getElementById("slContainer") as HTMLDivElement;
  const busar = document.createElement("h1");
  busar.innerHTML = "busar";
  slContainer.appendChild(busar);
  for (let i = 0; i < buses.length; i++) {
    const busContainer = document.createElement("div") as HTMLDivElement;
    const busLineNumber = document.createElement("p");
    const busDestination = document.createElement("p");
    const busDisplayTime = document.createElement("p");
    const busStop = document.createElement("p");

    busLineNumber.innerHTML = sl.Buses[i].LineNumber;
    busDestination.innerHTML = sl.Buses[i].Destination;
    busDisplayTime.innerHTML = sl.Buses[i].DisplayTime;
    busStop.innerHTML = sl.Buses[i].StopPointDesignation;

    busContainer.className = "vehicleContainer";
    slContainer.className = "vehicleContainer__slContainer";
    busDestination.className = "vehicleContainer__busDestination";
    busDisplayTime.className = "vehicleContainer__busDisplayTime";
    busStop.className = "vehicleContainer__busStop";

    slContainer.appendChild(busContainer);
    busContainer.appendChild(busLineNumber);
    busContainer.appendChild(busDestination);
    busContainer.appendChild(busDisplayTime);
    busContainer.appendChild(busStop);
  }
};
