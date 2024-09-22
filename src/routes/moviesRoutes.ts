import { Router } from "express";
import {
  deleteMovie,
  getAllMovies,
  createMovie,
  getMovieById,
  updateMovie,
} from "./../controllers/moviesController";

const router = Router();

router.route("/").get(getAllMovies).post(createMovie);

router.route("/:id").get(getMovieById).patch(updateMovie).delete(deleteMovie);

export default router;
