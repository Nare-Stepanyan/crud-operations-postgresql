import { pool } from "../db/database";
import { IActor } from "../models/actor";

export class ActorService {
  static async createActor(actor: IActor): Promise<void> {
    const { name, nationality, dateOfBirth } = actor;
    await pool.query(
      "INSERT INTO actors (name, nationality, directorId) VALUES ($1, $2, $3)",
      [name, nationality, dateOfBirth]
    );
  }

  static async getActors(): Promise<IActor[]> {
    const result = await pool.query("SELECT * FROM actors");
    return result.rows;
  }

  static async getActorById(actorId: number): Promise<IActor | null> {
    const result = await pool.query("SELECT * FROM actors WHERE actorId = $1", [
      actorId,
    ]);
    return result.rows[0] || null;
  }

  static async updateActor(actorId: number, actor: IActor): Promise<void> {
    const { name, nationality, dateOfBirth } = actor;
    await pool.query(
      "UPDATE actors SET name = $1, nationality = $2, dateOfBirth = $3 WHERE actorId = $4",
      [name, nationality, dateOfBirth, actorId]
    );
  }

  static async deleteActor(actorId: number): Promise<void> {
    await pool.query("DELETE FROM actors WHERE actorId = $1", [actorId]);
  }
}
