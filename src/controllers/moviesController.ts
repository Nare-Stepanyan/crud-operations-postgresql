import { Request, Response } from "express";
import { MovieService } from "../services/moviesService";

export const getAllMovies = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const movies = await MovieService.getMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve movies" });
  }
};

export const getMovieById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const movieId = parseInt(req.params.id, 10);
    const movie = await MovieService.getMovieById(movieId);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ error: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve movie" });
  }
};

export const createMovie = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, releaseYear, directorId } = req.body;
    const newMovie = await MovieService.createMovie({
      title,
      releaseYear,
      directorId,
    });
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: "Failed to create movie" });
  }
};

export const updateMovie = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const movieId = parseInt(req.params.id, 10);
    const { title, releaseYear, directorId } = req.body;
    const updatedMovie = await MovieService.updateMovie(movieId, {
      title,
      releaseYear,
      directorId,
    });
    res.json(updatedMovie);
  } catch (error) {
    res.status(500).json({ error: "Failed to update movie" });
  }
};

export const deleteMovie = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const movieId = parseInt(req.params.id, 10);
    await MovieService.deleteMovie(movieId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete movie" });
  }
};
