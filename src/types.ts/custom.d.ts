import { Request } from "express";
import IActor from "./../models/actor";

export interface IGetActorRequest extends Request {
  actor?: IActor;
}
