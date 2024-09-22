import { Router } from "express";
import {
  createGenre,
  deleteGenre,
  getGenre,
  getGenres,
  updateGenre,
} from "../controllers/genresController";

const router = Router();

router.route("/").get(getGenres).post(createGenre);

router.route("/:id").get(getGenre).patch(updateGenre).delete(deleteGenre);

export default router;
