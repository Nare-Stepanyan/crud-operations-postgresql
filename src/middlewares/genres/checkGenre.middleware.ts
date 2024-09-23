import { Response, NextFunction } from "express";
import { catchAsync } from "../../helpers/catchAsync";
import { ERROR_MESSAGES } from "../../constants.ts/errorMessages";
import { STATUS_CODES } from "../../constants.ts/statusCodes";
import { ICustomRequest } from "../../types.ts/custom";
import { GenreService } from "../../services/genresService";

export const checkGenreExists = catchAsync(
  async (
    req: ICustomRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const genreId = parseInt(req.params.id, 10);
    const genre = await GenreService.getGenreById(genreId);

    if (!genre) {
      res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ error: ERROR_MESSAGES.GENRE_NOT_FOUND });
      return;
    }

    req.genre = genre;
    next();
  }
);
