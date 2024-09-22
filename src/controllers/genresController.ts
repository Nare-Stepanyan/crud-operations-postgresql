import { Request, Response } from "express";
import { GenreService } from "../services/genresService";

export const createGenre = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.body;
    const newGenre = await GenreService.createGenre({
      name,
    });
    res.status(201).json(newGenre);
  } catch (error) {
    res.status(500).json({ error: "Failed to create genre" });
  }
};

export const updateGenre = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const genreId = parseInt(req.params.id, 10);
    const { name } = req.body;
    const updatedGenre = await GenreService.updateGenre(genreId, {
      name,
    });
    res.json(updatedGenre);
  } catch (error) {
    res.status(500).json({ error: "Failed to update genre" });
  }
};

export const getGenre = async (req: Request, res: Response): Promise<void> => {
  try {
    const genreId = parseInt(req.params.id, 10);
    const genre = await GenreService.getGenreById(genreId);
    if (genre) {
      res.json(genre);
    } else {
      res.status(404).json({ error: "Genre not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve genre" });
  }
};

export const getGenres = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const genres = await GenreService.getGenres();
    res.json(genres);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve genres" });
  }
};

export const deleteGenre = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const genreId = parseInt(req.params.id, 10);
    await GenreService.deleteGenre(genreId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete genre" });
  }
};
