import { Request, Response } from "express";
import { MovieService } from "../services/moviesService";
import { catchAsync } from "../helpers/catchAsync";
import { ICustomRequest } from "../types.ts/custom";
import { STATUS_CODES } from "../constants.ts/statusCodes";

export const getAllMovies = catchAsync(
  async (_req: Request, res: Response): Promise<void> => {
    const movies = await MovieService.getMovies();
    res.json(movies);
  }
);

export const getMovieById = catchAsync(
  async (req: ICustomRequest, res: Response): Promise<void> => {
    res.json(req.movie);
  }
);

export const createMovie = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { title, releaseYear, directorId } = req.body;
    const newMovie = await MovieService.createMovie({
      title,
      releaseYear,
      directorId,
    });
    res.status(STATUS_CODES.CREATED).json(newMovie);
  }
);

export const updateMovie = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const movieId = parseInt(req.params.id, 10);
    const { title, releaseYear, directorId } = req.body;
    const updatedMovie = await MovieService.updateMovie(movieId, {
      title,
      releaseYear,
      directorId,
    });
    res.json(updatedMovie);
  }
);

export const deleteMovie = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const movieId = parseInt(req.params.id, 10);
    await MovieService.deleteMovie(movieId);
    res.status(STATUS_CODES.NO_CONTENT).send();
  }
);
