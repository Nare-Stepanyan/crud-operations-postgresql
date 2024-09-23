import { Request, Response } from "express";
import { MovieGenresService } from "../services/movieGenreService";
import { catchAsync } from "../helpers/catchAsync";
import { ERROR_MESSAGES } from "../constants.ts/errorMessages";
import { STATUS_CODES } from "../constants.ts/statusCodes";
import { SUCCESS_MESSAGES } from "../constants.ts/successMessages";

export const addMovieGenre = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { movieId, genreId } = req.body;

    if (!movieId || !genreId) {
      res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ error: ERROR_MESSAGES.REQUIRED_MOVIE_ID_GENRE_ID });
      return;
    }

    await MovieGenresService.addMovieGenre(movieId, genreId);
    res
      .status(STATUS_CODES.NOT_FOUND)
      .json({ message: SUCCESS_MESSAGES.LINKED_MOVIE_GENRE });
  }
);

export const removeMovieGenre = catchAsync(
  async (req: Request, res: Response): Promise<void> => {
    const { movieId, genreId } = req.params;

    await MovieGenresService.removeMovieGenre(
      parseInt(movieId, 10),
      parseInt(genreId, 10)
    );
    res.status(STATUS_CODES.NO_CONTENT).send();
  }
);
