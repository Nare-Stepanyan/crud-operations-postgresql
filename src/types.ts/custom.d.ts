import { Request } from "express";
import IActor from "./../models/actor";
import { IDirector } from "../models/director";
import { IGenre } from "../models/genre";
import { IMovie } from "../models/movie";

export interface ICustomRequest extends Request {
  actor?: IActor;
  director?: IDirector;
  genre?: IGenre;
  movie?: IMovie;
}
