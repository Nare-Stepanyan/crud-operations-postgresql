import { Request, Response } from "express";
import { RatingService } from "../services/ratingService";

export const getRatingByMovieId = async (req: Request, res: Response) => {
  try {
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
  } catch (error) {
    console.error("Error fetching rating:", error);
    res.status(500).json({ error: "Failed to retrieve rating" });
  }
};

export const createRating = async (req: Request, res: Response) => {
  try {
    const { movieId, rating } = req.body;
    if (!movieId || !rating) {
      return res
        .status(400)
        .json({ error: "Movie ID and rating are required" });
    }

    await RatingService.createRating({ movieId, rating });
    res.status(201).json({ message: "Rating created successfully" });
  } catch (error) {
    console.error("Error creating rating:", error);
    res.status(500).json({ error: "Failed to create rating" });
  }
};

export const updateRating = async (req: Request, res: Response) => {
  try {
    const movieId = parseInt(req.params.movieId, 10);
    const { rating } = req.body;

    if (isNaN(movieId) || rating === undefined) {
      return res.status(400).json({ error: "Invalid movie ID or rating" });
    }

    await RatingService.updateRating(movieId, rating);
    res.json({ message: "Rating updated successfully" });
  } catch (error) {
    console.error("Error updating rating:", error);
    res.status(500).json({ error: "Failed to update rating" });
  }
};

export const deleteRating = async (req: Request, res: Response) => {
  try {
    const movieId = parseInt(req.params.movieId, 10);
    if (isNaN(movieId)) {
      return res.status(400).json({ error: "Invalid movie ID" });
    }

    await RatingService.deleteRating(movieId);
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting rating:", error);
    res.status(500).json({ error: "Failed to delete rating" });
  }
};
