import express from 'express';
import dotenv from 'dotenv';
import ejs from "ejs";
import path from 'path';
import { fileURLToPath } from 'url';
import caseEntorno from "../config/index.js";
dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//const __dirname = `E:\Sena\Becerra\node\NodeGod\HelpMeAlfa\aplicacion`;

//Configuración
app.set("PORT", 10000);
app.set("view engine", "ejs");
app.set("views", path.resolve(path.join(__dirname, "views")));

//midlewares
app.use(express.static("./public"));

export default app;

//Ideas de nombres:

/*
opinari

NeonVote
CyberPolls
FutureForum
NeoQ&A
GlitchBallot
CyberPulse
PixelPolls
CodeCouncil
NeonNexus
BitVote

AskAround
PollPal
MindMeld
OpinionHive
VoteVault
QueryQuest
InquiryIsland
ThinkTanker
SurveySphere
IdeaExchange


*/