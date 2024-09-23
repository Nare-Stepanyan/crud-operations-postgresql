import { Request, Response } from "express";
import { GenreService } from "../services/genresService";
import { catchAsync } from "../helpers/catchAsync";

export const createGenre = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { name } = req.body;
    const newGenre = await GenreService.createGenre({
      name,
    });
    res.status(201).json(newGenre);
  }
);

export const updateGenre = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const genreId = parseInt(req.params.id, 10);
    const { name } = req.body;
    const updatedGenre = await GenreService.updateGenre(genreId, {
      name,
    });
    res.json(updatedGenre);
  }
);

export const getGenre = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const genreId = parseInt(req.params.id, 10);
    const genre = await GenreService.getGenreById(genreId);
    if (genre) {
      res.json(genre);
    } else {
      res.status(404).json({ error: "Genre not found" });
    }
  }
);

export const getGenres = catchAsync(
  async (_req: Request, res: Response): Promise<void> => {
    const genres = await GenreService.getGenres();
    res.json(genres);
  }
);

export const deleteGenre = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const genreId = parseInt(req.params.id, 10);
    await GenreService.deleteGenre(genreId);
    res.status(204).send();
  }
);
