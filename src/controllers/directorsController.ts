import { Request, Response } from "express";
import { DirectorService } from "../services/directorsService";
import { catchAsync } from "../helpers/catchAsync";
import { ICustomRequest } from "../types.ts/custom";
import { STATUS_CODES } from "../constants.ts/statusCodes";

export const createDirector = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { name, nationality, dateOfBirth } = req.body;
    const newDirector = await DirectorService.createDirector({
      name,
      nationality,
      dateOfBirth,
    });
    res.status(STATUS_CODES.CREATED).json(newDirector);
  }
);

export const updateDirector = catchAsync(
  async (req: ICustomRequest, res: Response): Promise<void> => {
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
  async (req: ICustomRequest, res: Response): Promise<void> => {
    res.json(req.director);
  }
);

export const getDirectors = catchAsync(
  async (_req: Request, res: Response): Promise<void> => {
    const directors = await DirectorService.getDirectors();
    res.json(directors);
  }
);

export const deleteDirector = catchAsync(
  async (req: ICustomRequest, res: Response): Promise<void> => {
    const directorId = parseInt(req.params.id, 10);
    await DirectorService.deleteDirector(directorId);
    res.status(STATUS_CODES.NO_CONTENT).send();
  }
);
