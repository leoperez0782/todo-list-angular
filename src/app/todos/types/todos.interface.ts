import { StatusEnum } from "./status.enum";

export interface TodoInterface{
  id:number,
  description: string,
  status: StatusEnum,
  expireDate: Date | null,
}
