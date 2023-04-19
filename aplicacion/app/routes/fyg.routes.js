import { Router } from 'express';
const fyg = Router();

//Foros y Grupos
fyg.get("/publicaciones/", (req, res) => {
    res.render("Publicaciones", {
        "title": "Publicaciones"
    });
});
fyg.get("/pyr/", (req, res) => {
    res.render("PyR")
});
fyg.get("/foros/", (req, res) => {
    res.render("Foros")
});

export default fyg;