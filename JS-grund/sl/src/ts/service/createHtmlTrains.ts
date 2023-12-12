import { IResponseData } from "../models/IResponseData";

export const createHtmlTrains = (sl: IResponseData) => {
  const train = sl.Trains;
  const slContainer = document.getElementById("slContainer") as HTMLDivElement;
  const tag = document.createElement("h1");
  tag.innerHTML = "tåg";
  slContainer.appendChild(tag);
  for (let i = 0; i < train.length; i++) {
    const busContainer = document.createElement("div") as HTMLDivElement;
    const busLineNumber = document.createElement("p");
    const busDestination = document.createElement("p");
    const busDisplayTime = document.createElement("p");
    const busStop = document.createElement("p");

    busLineNumber.innerHTML = sl.Trains[i].LineNumber;
    busDestination.innerHTML = sl.Trains[i].Destination;
    busDisplayTime.innerHTML = sl.Trains[i].DisplayTime;
    busStop.innerHTML = sl.Trains[i].StopPointDesignation;

    slContainer.appendChild(busContainer);
    busContainer.appendChild(busLineNumber);
    busContainer.appendChild(busDestination);
    busContainer.appendChild(busDisplayTime);
    busContainer.appendChild(busStop);
  }
};
