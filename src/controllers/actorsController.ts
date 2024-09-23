import { Request, Response } from "express";
import { ActorService } from "../services/actorsService";
import { catchAsync } from "../helpers/catchAsync";

export const createActor = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { name, nationality, dateOfBirth } = req.body;
    const newActor = await ActorService.createActor({
      name,
      nationality,
      dateOfBirth,
    });
    res.status(201).json(newActor);
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
  async (req: Request, res: Response): Promise<void> => {
    const actorId = parseInt(req.params.id, 10);
    const actor = await ActorService.getActorById(actorId);
    if (actor) {
      res.json(actor);
    } else {
      res.status(404).json({ error: "Actor not found" });
    }
  }
);

export const getActors = catchAsync(
  async (_req: Request, res: Response): Promise<void> => {
    const actors = await ActorService.getActors();
    res.json(actors);
  }
);

export const deleteActor = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const actorId = parseInt(req.params.id, 10);
    await ActorService.deleteActor(actorId);
    res.status(204).send();
  }
);
