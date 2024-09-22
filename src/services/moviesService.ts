import { pool } from "../db/database";
import { IMovie } from "../models/movie";

export class MovieService {
  static async createMovie(movie: IMovie): Promise<void> {
    const { title, releaseYear, directorId } = movie;
    await pool.query(
      "INSERT INTO movies (title, releaseYear, directorId) VALUES ($1, $2, $3)",
      [title, releaseYear, directorId]
    );
  }

  static async getMovies(): Promise<IMovie[]> {
    const result = await pool.query("SELECT * FROM movies");
    return result.rows;
  }

  static async getMovieById(movieId: number): Promise<IMovie | null> {
    const result = await pool.query("SELECT * FROM movies WHERE movieId = $1", [
      movieId,
    ]);
    return result.rows[0] || null;
  }

  static async updateMovie(movieId: number, movie: IMovie): Promise<void> {
    const { title, releaseYear, directorId } = movie;
    await pool.query(
      "UPDATE movies SET title = $1, releaseYear = $2, directorId = $3 WHERE movieId = $4",
      [title, releaseYear, directorId, movieId]
    );
  }

  static async deleteMovie(movieId: number): Promise<void> {
    await pool.query("DELETE FROM movies WHERE movieId = $1", [movieId]);
  }
}
