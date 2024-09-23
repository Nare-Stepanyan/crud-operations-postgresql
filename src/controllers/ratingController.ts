import { Request, Response } from "express";
import { RatingService } from "../services/ratingService";
import { catchAsync } from "../helpers/catchAsync";
import { STATUS_CODES } from "../constants.ts/statusCodes";
import { ERROR_MESSAGES } from "../constants.ts/errorMessages";
import { SUCCESS_MESSAGES } from "../constants.ts/successMessages";

export const getRatingByMovieId = catchAsync(
  async (req: Request, res: Response) => {
    const movieId = parseInt(req.params.movieId, 10);
    if (isNaN(movieId)) {
      return res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ error: ERROR_MESSAGES.INVALID_ID });
    }

    const rating = await RatingService.getRatingByMovieId(movieId);
    if (rating) {
      res.json(rating);
    } else {
      res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ error: ERROR_MESSAGES.RATING_NOT_FOUND });
    }
  }
);

export const createRating = catchAsync(async (req: Request, res: Response) => {
  const { movieId, rating } = req.body;
  if (!movieId || !rating) {
    return res
      .status(STATUS_CODES.NOT_FOUND)
      .json({ error: ERROR_MESSAGES.REQUIRED_ID_RATING });
  }

  await RatingService.createRating({ movieId, rating });
  res
    .status(STATUS_CODES.CREATED)
    .json({ message: SUCCESS_MESSAGES.RATING_CREATED });
});

export const updateRating = catchAsync(async (req: Request, res: Response) => {
  const movieId = parseInt(req.params.movieId, 10);
  const { rating } = req.body;

  if (isNaN(movieId) || rating === undefined) {
    return res
      .status(STATUS_CODES.NOT_FOUND)
      .json({ error: ERROR_MESSAGES.INVALID_ID_RATING });
  }

  await RatingService.updateRating(movieId, rating);
  res.json({ message: SUCCESS_MESSAGES.RATING_UPDATED });
});

export const deleteRating = catchAsync(async (req: Request, res: Response) => {
  const movieId = parseInt(req.params.movieId, 10);
  if (isNaN(movieId)) {
    return res
      .status(STATUS_CODES.NOT_FOUND)
      .json({ error: ERROR_MESSAGES.INVALID_ID });
  }

  await RatingService.deleteRating(movieId);
  res.status(STATUS_CODES.NO_CONTENT).send();
});
