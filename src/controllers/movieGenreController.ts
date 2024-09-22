import { Request, Response } from "express";
import { MovieGenresService } from "../services/movieGenreService";

export const addMovieGenre = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { movieId, genreId } = req.body;

    if (!movieId || !genreId) {
      res.status(400).json({ error: "movieId and genreId are required" });
    }

    await MovieGenresService.addMovieGenre(movieId, genreId);
    res.status(201).json({ message: "Movie and Genre linked successfully" });
  } catch (error) {
    console.error("Error adding movie to genre:", error);
    res.status(500).json({ error: "Failed to link movie and genre" });
  }
};

export const removeMovieGenre = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { movieId, genreId } = req.params;

    await MovieGenresService.removeMovieGenre(
      parseInt(movieId, 10),
      parseInt(genreId, 10)
    );
    res.status(204).send();
  } catch (error) {
    console.error("Error removing movie from genre:", error);
    res.status(500).json({ error: "Failed to unlink movie and genre" });
  }
};
