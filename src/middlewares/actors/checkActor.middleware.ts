import { Response, NextFunction } from "express";
import { catchAsync } from "../../helpers/catchAsync";
import { ActorService } from "../../services/actorsService";
import { ERROR_MESSAGES } from "../../constants.ts/errorMessages";
import { STATUS_CODES } from "../../constants.ts/statusCodes";
import { IGetActorRequest } from "../../types.ts/custom";

export const checkActorExists = catchAsync(
  async (
    req: IGetActorRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const actorId = parseInt(req.params.id, 10);
    const actor = await ActorService.getActorById(actorId);

    if (!actor) {
      res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ error: ERROR_MESSAGES.ACTOR_NOT_FOUND });
      return;
    }

    req.actor = actor;
    next();
  }
);
