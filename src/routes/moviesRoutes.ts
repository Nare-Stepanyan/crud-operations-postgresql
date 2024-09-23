import { Router } from "express";
import {
  deleteMovie,
  getAllMovies,
  createMovie,
  getMovieById,
  updateMovie,
} from "./../controllers/moviesController";
import { checkMovieExists } from "../middlewares/movies/checkMovie.middleware";

const router = Router();

router.param("id", checkMovieExists);

router.route("/").get(getAllMovies).post(createMovie);

router.route("/:id").get(getMovieById).patch(updateMovie).delete(deleteMovie);

export default router;
