import { pool } from "../db/database";
import { IRating } from "../models/rating";

export class RatingService {
  static async createRating(rating: IRating): Promise<void> {
    const { movieId, rating: movieRating } = rating;
    await pool.query("INSERT INTO ratings (movieId, rating) VALUES ($1, $2)", [
      movieId,
      movieRating,
    ]);
  }

  static async getRatingByMovieId(movieId: number): Promise<IRating | null> {
    const result = await pool.query(
      "SELECT * FROM ratings WHERE movieId = $1",
      [movieId]
    );
    return result.rows[0] || null;
  }

  static async updateRating(movieId: number, newRating: number): Promise<void> {
    await pool.query("UPDATE ratings SET rating = $1 WHERE movieId = $2", [
      newRating,
      movieId,
    ]);
  }

  static async deleteRating(movieId: number): Promise<void> {
    await pool.query("DELETE FROM ratings WHERE movieId = $1", [movieId]);
  }
}
