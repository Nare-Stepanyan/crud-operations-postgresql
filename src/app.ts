import express from "express";
import morgan from "morgan";
import moviesRouter from "./routes/moviesRoutes";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/movies", moviesRouter);

export default app;
