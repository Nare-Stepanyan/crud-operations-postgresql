import { Request, Response } from "express";
import { MovieService } from "../services/moviesService";
import { catchAsync } from "../helpers/catchAsync";

export const getAllMovies = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const movies = await MovieService.getMovies();
    res.json(movies);
  }
);

export const getMovieById = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const movieId = parseInt(req.params.id, 10);
    const movie = await MovieService.getMovieById(movieId);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ error: "Movie not found" });
    }
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
    res.status(201).json(newMovie);
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
    res.status(204).send();
  }
);
