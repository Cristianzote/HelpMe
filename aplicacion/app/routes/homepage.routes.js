import { Router } from 'express';
const home = Router();

//Logins
home.get("/", (req, res) => {
    //res.send("path.dirname");
    res.render("Login")
});
home.get("/login/", (req, res) => {
    res.render("Login")
});
home.get("/login2/", (req, res) => {
    res.render("LoginConFooter")
});
home.get("/registro/", (req, res) => {
    res.render("Registro")
});

export default home;