import { Router } from 'express';
import requireLogin from '../requireLogin.js';
const fyg = Router();

//Foros y Grupos
fyg.get("/publicaciones/", /*requireLogin,*/  (req, res) => {
    res.render("Publicaciones", {
        "title": "Publicaciones"
    });
});
fyg.get("/pyr/", requireLogin, async (req, res) => {
    const { uid } = req.user;
    const user = await firebaseAuth.getUser(uid);
    res.render('PyR', { uid: user.uid, email: user.email });
});
fyg.get("/foros/", /*requireLogin,*/ (req, res) => {
    res.render("Foros")
});

export default fyg;