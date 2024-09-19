import app from "./app";
import createDatabaseAndTables from "./db/init";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await createDatabaseAndTables();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
