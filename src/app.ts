import express from "express";
import morgan from "morgan";
import moviesRouter from "./routes/moviesRoutes";
import actorsRouter from "./routes/actorsRoutes";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/movies", moviesRouter);
app.use("/api/v1/actors", actorsRouter);

export default app;
