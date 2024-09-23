import { Request, Response } from "express";
import { MovieGenresService } from "../services/movieGenreService";
import { catchAsync } from "../helpers/catchAsync";

export const addMovieGenre = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { movieId, genreId } = req.body;

    if (!movieId || !genreId) {
      res.status(400).json({ error: "movieId and genreId are required" });
    }

    await MovieGenresService.addMovieGenre(movieId, genreId);
    res.status(201).json({ message: "Movie and Genre linked successfully" });
  }
);

export const removeMovieGenre = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { movieId, genreId } = req.params;

    await MovieGenresService.removeMovieGenre(
      parseInt(movieId, 10),
      parseInt(genreId, 10)
    );
    res.status(204).send();
  }
);
