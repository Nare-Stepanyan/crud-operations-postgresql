import { pool } from "../db/database";
import { IDirector } from "../models/director";

export class DirectorService {
  static async createDirector(actor: IDirector): Promise<void> {
    const { name, nationality, dateOfBirth } = actor;
    await pool.query(
      "INSERT INTO directors (name, nationality, dateOfBirth) VALUES ($1, $2, $3)",
      [name, nationality, dateOfBirth]
    );
  }

  static async getDirectors(): Promise<IDirector[]> {
    const result = await pool.query("SELECT * FROM directors");
    return result.rows;
  }

  static async getDirectorById(directorId: number): Promise<IDirector | null> {
    const result = await pool.query("SELECT * FROM directors WHERE id = $1", [
      directorId,
    ]);
    return result.rows[0] || null;
  }

  static async updateDirector(
    directorId: number,
    actor: IDirector
  ): Promise<void> {
    const { name, nationality, dateOfBirth } = actor;
    await pool.query(
      "UPDATE directors SET name = $1, nationality = $2, dateOfBirth = $3 WHERE id = $4",
      [name, nationality, dateOfBirth, directorId]
    );
  }

  static async deleteDirector(directorId: number): Promise<void> {
    await pool.query("DELETE FROM directors WHERE id = $1", [directorId]);
  }
}
