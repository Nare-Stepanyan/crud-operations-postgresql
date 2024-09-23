import { Router } from "express";
import {
  createActor,
  deleteActor,
  getActor,
  getActors,
  updateActor,
} from "../controllers/actorsController";
import { checkActorExists } from "../middlewares/actors/checkActor.middleware";

const router = Router();

router.route("/").get(getActors).post(createActor);

router
  .route("/:id")
  .get(checkActorExists, getActor)
  .patch(updateActor)
  .delete(deleteActor);

export default router;
