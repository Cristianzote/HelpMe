import { Router } from 'express';
import requireLogin from '../requireLogin.js';
const fyg = Router();

//Foros y Grupos
fyg.get("/publicaciones/", /*requireLogin,*/  (req, res) => {
    res.render("Publicaciones", {
        "title": "Publicaciones"
    });
});
fyg.get("/pyr/", /*requireLogin,*/ (req, res) => {
    res.render("PyR")
});
fyg.get("/foros/", /*requireLogin,*/ (req, res) => {
    res.render("Foros")
});

export default fyg;