import { IResponseData } from "./models/IResponseData";
import { createHtmlBuses } from "./service/createHtmlBus";
import { createHtmlTrains } from "./service/createHtmlTrains";

export const createHtmlSl = (sl: IResponseData) => {
  createHtmlBuses(sl);
  createHtmlTrains(sl);
};
