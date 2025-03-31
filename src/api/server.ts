import express, { Application } from "express";
import populationRouter from "./routes/population";

const app: Application = express();
const PORT = 3000;

app.use(express.json());

app.use(populationRouter);

export function startServer() {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}