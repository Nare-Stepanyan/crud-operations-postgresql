import { Request, Response } from "express";
import { DirectorService } from "../services/directorsService";

export const createDirector = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, nationality, dateOfBirth } = req.body;
    const newDirector = await DirectorService.createDirector({
      name,
      nationality,
      dateOfBirth,
    });
    res.status(201).json(newDirector);
  } catch (error) {
    res.status(500).json({ error: "Failed to create director" });
  }
};

export const updateDirector = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const directorId = parseInt(req.params.id, 10);
    const { name, nationality, dateOfBirth } = req.body;
    const updatedDirector = await DirectorService.updateDirector(directorId, {
      name,
      nationality,
      dateOfBirth,
    });
    res.json(updatedDirector);
  } catch (error) {
    res.status(500).json({ error: "Failed to update director" });
  }
};

export const getDirector = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const directorId = parseInt(req.params.id, 10);
    const director = await DirectorService.getDirectorById(directorId);
    if (director) {
      res.json(director);
    } else {
      res.status(404).json({ error: "Director not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve director" });
  }
};

export const getDirectors = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const directors = await DirectorService.getDirectors();
    res.json(directors);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve directors" });
  }
};

export const deleteDirector = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const directorId = parseInt(req.params.id, 10);
    await DirectorService.deleteDirector(directorId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete director" });
  }
};
