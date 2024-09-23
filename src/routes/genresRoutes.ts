import { Router } from "express";
import {
  createGenre,
  deleteGenre,
  getGenre,
  getGenres,
  updateGenre,
} from "../controllers/genresController";
import { checkGenreExists } from "../middlewares/genres/checkGenre.middleware";

const router = Router();

router.param("id", checkGenreExists);

router.route("/").get(getGenres).post(createGenre);

router.route("/:id").get(getGenre).patch(updateGenre).delete(deleteGenre);

export default router;
