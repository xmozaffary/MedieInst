import { IResponseData } from "../models/IResponseData";
import { ISlResp } from "../models/ISlResp";
import { get } from "./serviceBase";

export const getSlRealTime = async (siteId: string): Promise<IResponseData> => {
  const url = `https://cors-anywhere.herokuapp.com/https://api.sl.se/api2/realtimedeparturesV4.json?key=703540bbd15f4d49be4d50a57c17a833&siteid=${siteId}&timewindow=10`;
  const data = await get<ISlResp>(url);
  return data.ResponseData;
};
