import { pool } from "../db/database";

export class MovieGenresService {
  static async addMovieGenre(movieId: number, genreId: number): Promise<void> {
    await pool.query(
      "INSERT INTO movieGenres (movieId, genreId) VALUES ($1, $2)",
      [movieId, genreId]
    );
  }

  static async removeMovieGenre(
    movieId: number,
    genreId: number
  ): Promise<void> {
    await pool.query(
      "DELETE FROM movieGenres WHERE movieId = $1 AND genreId = $2",
      [movieId, genreId]
    );
  }
}
