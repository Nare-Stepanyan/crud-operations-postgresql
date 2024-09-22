import { Router } from "express";
import {
  addMovieGenre,
  removeMovieGenre,
} from "../controllers/movieGenreController";

const router = Router();

router.post("/movie-genre", addMovieGenre);
router.delete("/movie-genre/:movieId/:genreId", removeMovieGenre);

export default router;
