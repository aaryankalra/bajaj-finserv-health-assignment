import express from "express";
import "dotenv/config";

import apiRoute from "./routes/api.route.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/bfhl", apiRoute);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
