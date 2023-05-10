import { Router } from 'express';
const others = Router();

//Otros
others.get("/redirect/", (req, res) => {
    res.render("redirect")
});
others.get("/loading/", (req, res) => {
    res.render("Loading")
});

export default others;