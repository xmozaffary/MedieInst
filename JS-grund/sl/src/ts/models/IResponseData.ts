import { IBuses } from "./IBuses";
import { ITrains } from "./ITrains";

export interface IResponseData {
  Buses: IBuses[];
  DataAge: number;
  Trains: ITrains[];
}
