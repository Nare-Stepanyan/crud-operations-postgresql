import { Router } from "express";
import {
  createDirector,
  deleteDirector,
  getDirector,
  getDirectors,
  updateDirector,
} from "../controllers/directorsController";

const router = Router();

router.route("/").get(getDirectors).post(createDirector);

router
  .route("/:id")
  .get(getDirector)
  .patch(updateDirector)
  .delete(deleteDirector);

export default router;
