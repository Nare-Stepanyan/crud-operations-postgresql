import { Response, NextFunction } from "express";
import { catchAsync } from "../../helpers/catchAsync";
import { ERROR_MESSAGES } from "../../constants.ts/errorMessages";
import { STATUS_CODES } from "../../constants.ts/statusCodes";
import { ICustomRequest } from "../../types.ts/custom";
import { MovieService } from "../../services/moviesService";

export const checkMovieExists = catchAsync(
  async (
    req: ICustomRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const movieId = parseInt(req.params.id, 10);
    const movie = await MovieService.getMovieById(movieId);

    if (!movie) {
      res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ error: ERROR_MESSAGES.MOVIE_NOT_FOUND });
      return;
    }

    req.movie = movie;
    next();
  }
);
