import { Request, Response } from "express";
import { ActorService } from "../services/actorsService";
import { catchAsync } from "../helpers/catchAsync";
import { STATUS_CODES } from "../constants.ts/statusCodes";
import { ICustomRequest } from "../types.ts/custom";

export const createActor = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { name, nationality, dateOfBirth } = req.body;
    const newActor = await ActorService.createActor({
      name,
      nationality,
      dateOfBirth,
    });
    res.status(STATUS_CODES.CREATED).json(newActor);
  }
);

export const updateActor = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const actorId = parseInt(req.params.id, 10);
    const { name, nationality, dateOfBirth } = req.body;
    const updatedActor = await ActorService.updateActor(actorId, {
      name,
      nationality,
      dateOfBirth,
    });
    res.json(updatedActor);
  }
);

export const getActor = catchAsync(
  async (req: ICustomRequest, res: Response): Promise<void> => {
    res.json(req.actor);
  }
);

export const getActors = catchAsync(
  async (_req: Request, res: Response): Promise<void> => {
    const actors = await ActorService.getActors();
    res.json(actors);
  }
);

export const deleteActor = catchAsync(
  async (req: ICustomRequest, res: Response): Promise<void> => {
    const actorId = parseInt(req.params.id, 10);
    await ActorService.deleteActor(actorId);
    res.status(STATUS_CODES.NO_CONTENT).send();
  }
);
