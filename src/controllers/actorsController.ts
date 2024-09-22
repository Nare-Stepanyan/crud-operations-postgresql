import { Request, Response } from "express";
import { ActorService } from "../services/actorsService";

export const createActor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, nationality, dateOfBirth } = req.body;
    const newActor = await ActorService.createActor({
      name,
      nationality,
      dateOfBirth,
    });
    res.status(201).json(newActor);
  } catch (error) {
    res.status(500).json({ error: "Failed to create actor" });
  }
};

export const updateActor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const actorId = parseInt(req.params.id, 10);
    const { name, nationality, dateOfBirth } = req.body;
    const updatedActor = await ActorService.updateActor(actorId, {
      name,
      nationality,
      dateOfBirth,
    });
    res.json(updatedActor);
  } catch (error) {
    res.status(500).json({ error: "Failed to update actor" });
  }
};

export const getActor = async (req: Request, res: Response): Promise<void> => {
  try {
    const actorId = parseInt(req.params.id, 10);
    const actor = await ActorService.getActorById(actorId);
    if (actor) {
      res.json(actor);
    } else {
      res.status(404).json({ error: "Actor not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve actor" });
  }
};

export const getActors = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const actors = await ActorService.getActors();
    res.json(actors);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve actors" });
  }
};

export const deleteActor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const actorId = parseInt(req.params.id, 10);
    await ActorService.deleteActor(actorId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete actor" });
  }
};
