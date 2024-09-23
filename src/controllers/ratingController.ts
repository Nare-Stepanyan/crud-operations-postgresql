import { Request, Response } from "express";
import { RatingService } from "../services/ratingService";
import { catchAsync } from "../helpers/catchAsync";

export const getRatingByMovieId = catchAsync(
  async (req: Request, res: Response) => {
    const movieId = parseInt(req.params.movieId, 10);
    if (isNaN(movieId)) {
      return res.status(400).json({ error: "Invalid movie ID" });
    }

    const rating = await RatingService.getRatingByMovieId(movieId);
    if (rating) {
      res.json(rating);
    } else {
      res.status(404).json({ error: "Rating not found" });
    }
  }
);

export const createRating = catchAsync(async (req: Request, res: Response) => {
  const { movieId, rating } = req.body;
  if (!movieId || !rating) {
    return res.status(400).json({ error: "Movie ID and rating are required" });
  }

  await RatingService.createRating({ movieId, rating });
  res.status(201).json({ message: "Rating created successfully" });
});

export const updateRating = catchAsync(async (req: Request, res: Response) => {
  const movieId = parseInt(req.params.movieId, 10);
  const { rating } = req.body;

  if (isNaN(movieId) || rating === undefined) {
    return res.status(400).json({ error: "Invalid movie ID or rating" });
  }

  await RatingService.updateRating(movieId, rating);
  res.json({ message: "Rating updated successfully" });
});

export const deleteRating = catchAsync(async (req: Request, res: Response) => {
  const movieId = parseInt(req.params.movieId, 10);
  if (isNaN(movieId)) {
    return res.status(400).json({ error: "Invalid movie ID" });
  }

  await RatingService.deleteRating(movieId);
  res.status(204).send();
});
