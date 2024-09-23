import { Request } from "express";
import IActor from "./../models/actor";
import { IDirector } from "../models/director";

export interface ICustomRequest extends Request {
  actor?: IActor;
  director?: IDirector;
}
