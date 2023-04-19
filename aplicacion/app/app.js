import express from 'express';
import dotenv from 'dotenv';
import ejs from "ejs";
import path from 'path';
import { fileURLToPath } from 'url';
import caseEntorno from "../config/index.js";
//Rutas
import home from "./routes/homepage.routes.js"
import fyg from "./routes/fyg.routes.js"
import others from "./routes/otros.routes.js"
import profile from "./routes/profile.routes.js"


// Inicialización
dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Configuración
app.set("PORT", 10000);
app.set("view engine", "ejs");
app.set("views", path.resolve(path.join(__dirname, "views")));

//midlewares
app.use(express.static("./public"));
app.use('/', home);
app.use('/', others);
app.use('/', fyg);
app.use('/', profile);

export default app;