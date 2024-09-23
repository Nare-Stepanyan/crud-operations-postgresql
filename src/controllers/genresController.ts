import { Request, Response } from "express";
import { GenreService } from "../services/genresService";
import { catchAsync } from "../helpers/catchAsync";
import { STATUS_CODES } from "../constants.ts/statusCodes";
import { ICustomRequest } from "../types.ts/custom";

export const createGenre = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { name } = req.body;
    const newGenre = await GenreService.createGenre({
      name,
    });
    res.status(STATUS_CODES.CREATED).json(newGenre);
  }
);

export const updateGenre = catchAsync(
  async (req: ICustomRequest, res: Response): Promise<void> => {
    const genreId = parseInt(req.params.id, 10);
    const { name } = req.body;
    const updatedGenre = await GenreService.updateGenre(genreId, {
      name,
    });
    res.json(updatedGenre);
  }
);

export const getGenre = catchAsync(
  async (req: ICustomRequest, res: Response): Promise<void> => {
    res.json(req.genre);
  }
);

export const getGenres = catchAsync(
  async (_req: Request, res: Response): Promise<void> => {
    const genres = await GenreService.getGenres();
    res.json(genres);
  }
);

export const deleteGenre = catchAsync(
  async (req: ICustomRequest, res: Response): Promise<void> => {
    const genreId = parseInt(req.params.id, 10);
    await GenreService.deleteGenre(genreId);
    res.status(STATUS_CODES.NO_CONTENT).send();
  }
);
