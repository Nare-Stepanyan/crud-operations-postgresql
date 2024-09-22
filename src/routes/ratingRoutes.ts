import express from "express";
import {
  getRatingByMovieId,
  createRating,
  updateRating,
  deleteRating,
} from "../controllers/ratingController";

const router = express.Router();

router.route("/").post(createRating);
router
  .route("/:movieId")
  .get(getRatingByMovieId)
  .patch(updateRating)
  .delete(deleteRating);

export default router;
