import { Router } from "express";
import {
  createActor,
  deleteActor,
  getActor,
  getActors,
  updateActor,
} from "../controllers/actorsController";

const router = Router();

router.route("/").get(getActors).post(createActor);

router.route("/:id").get(getActor).patch(updateActor).delete(deleteActor);

export default router;
