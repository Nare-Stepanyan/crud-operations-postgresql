import { Router } from "express";
import {
  createDirector,
  deleteDirector,
  getDirector,
  getDirectors,
  updateDirector,
} from "../controllers/directorsController";
import { checkDirectorExists } from "../middlewares/directors/checkDirector.middleware";

const router = Router();

router.param("id", checkDirectorExists);

router.route("/").get(getDirectors).post(createDirector);

router
  .route("/:id")
  .get(getDirector)
  .patch(updateDirector)
  .delete(deleteDirector);

export default router;
