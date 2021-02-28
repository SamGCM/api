import { app } from "./app";
import dotenv from "dotenv"
import "dotenv/config"
dotenv.config();

app.listen(3333, () => console.log('Server is ruinning!'));
