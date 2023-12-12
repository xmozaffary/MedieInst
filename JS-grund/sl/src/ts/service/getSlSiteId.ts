import { ISiteIdData } from "../models/ISiteIdResp";
import { get } from "./serviceBase";

export const getSlSiteId = async (): Promise<string> => {
  const input = document.getElementById("input") as HTMLInputElement;
  const getInputSl = input.value;
  const url = `https://cors-anywhere.herokuapp.com/https://journeyplanner.integration.sl.se/v1/typeahead.json?key=d4be15122da34f4d89aa910ef3b211c9&searchstring=${getInputSl}`;
  const data = await get<ISiteIdData>(url);
  return data.ResponseData[0].SiteId;
};
