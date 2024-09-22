import { pool } from "../db/database";
import { IGenre } from "../models/genre";

export class GenreService {
  static async createGenre(genre: IGenre): Promise<void> {
    const { name } = genre;
    await pool.query("INSERT INTO genres (name) VALUES ($1)", [name]);
  }

  static async getGenres(): Promise<IGenre[]> {
    const result = await pool.query("SELECT * FROM genres");
    return result.rows;
  }

  static async getGenreById(genreId: number): Promise<IGenre | null> {
    const result = await pool.query("SELECT * FROM genres WHERE id = $1", [
      genreId,
    ]);
    return result.rows[0] || null;
  }

  static async updateGenre(genreId: number, genre: IGenre): Promise<void> {
    const { name } = genre;
    await pool.query("UPDATE genres SET name = $1 WHERE id = $2", [
      name,
      genreId,
    ]);
  }

  static async deleteGenre(genreId: number): Promise<void> {
    await pool.query("DELETE FROM genres WHERE id = $1", [genreId]);
  }
}
