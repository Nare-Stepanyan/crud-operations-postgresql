import express from "express";
import morgan from "morgan";
import moviesRouter from "./routes/moviesRoutes";
import actorsRouter from "./routes/actorsRoutes";
import directorsRouter from "./routes/directorsRoutes";
import genresRouter from "./routes/genresRoutes";
import ratingRouter from "./routes/ratingRoutes";
import { handleGlobalErrors } from "./helpers/globalErrorHandler";
import AppError from "./helpers/handleAppErrors";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/movies", moviesRouter);
app.use("/api/v1/actors", actorsRouter);
app.use("/api/v1/directors", directorsRouter);
app.use("/api/v1/genres", genresRouter);
app.use("/api/v1/ratings", ratingRouter);

app.all("*", (req, _res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(handleGlobalErrors);

export default app;
