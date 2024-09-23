import { Request, Response } from "express";
import { DirectorService } from "../services/directorsService";
import { catchAsync } from "../helpers/catchAsync";

export const createDirector = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { name, nationality, dateOfBirth } = req.body;
    const newDirector = await DirectorService.createDirector({
      name,
      nationality,
      dateOfBirth,
    });
    res.status(201).json(newDirector);
  }
);

export const updateDirector = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const directorId = parseInt(req.params.id, 10);
    const { name, nationality, dateOfBirth } = req.body;
    const updatedDirector = await DirectorService.updateDirector(directorId, {
      name,
      nationality,
      dateOfBirth,
    });
    res.json(updatedDirector);
  }
);

export const getDirector = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const directorId = parseInt(req.params.id, 10);
    const director = await DirectorService.getDirectorById(directorId);
    if (director) {
      res.json(director);
    } else {
      res.status(404).json({ error: "Director not found" });
    }
  }
);

export const getDirectors = catchAsync(
  async (_req: Request, res: Response): Promise<void> => {
    const directors = await DirectorService.getDirectors();
    res.json(directors);
  }
);

export const deleteDirector = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const directorId = parseInt(req.params.id, 10);
    await DirectorService.deleteDirector(directorId);
  }
);
