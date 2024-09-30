import express, { Application } from "express";

import playerRouter from "./routes/playerRouter"


const app: Application = express();

app.use(express.json());

app.use("/api", playerRouter)




const PORT: string = "3000";

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});