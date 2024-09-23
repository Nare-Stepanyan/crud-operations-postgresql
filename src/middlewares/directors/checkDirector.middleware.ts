import { Response, NextFunction } from "express";
import { catchAsync } from "../../helpers/catchAsync";
import { ERROR_MESSAGES } from "../../constants.ts/errorMessages";
import { STATUS_CODES } from "../../constants.ts/statusCodes";
import { ICustomRequest } from "../../types.ts/custom";
import { DirectorService } from "../../services/directorsService";

export const checkDirectorExists = catchAsync(
  async (
    req: ICustomRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const directorId = parseInt(req.params.id, 10);
    const director = await DirectorService.getDirectorById(directorId);

    if (!director) {
      res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ error: ERROR_MESSAGES.DIRECTOR_NOT_FOUND });
      return;
    }

    req.director = director;
    next();
  }
);
