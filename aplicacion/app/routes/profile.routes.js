import { Router } from 'express';
const profile = Router();

//Otros
profile.get("/perfil/", (req, res) => {
    res.render("Perfil")
});

export default profile;