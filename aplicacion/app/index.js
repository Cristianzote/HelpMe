import app from "./app.js";
import caseEntorno from "../config/index.js";

//Rutas
//Logins
app.get("/", (req, res) => {
    //res.send("path.dirname");
    res.render("Login")
});
app.get("/login/", (req, res) => {
    res.render("Login")
});
app.get("/login2/", (req, res) => {
    res.render("LoginConFooter")
});
app.get("/registro/", (req, res) => {
    res.render("Registro")
});

//Perfil
app.get("/perfil/", (req, res) => {
    res.render("Perfil")
});

//Foros y Grupos
app.get("/publicaciones/", (req, res) => {
    res.render("Publicaciones")
});
app.get("/pyr/", (req, res) => {
    res.render("PyR")
});

//Otros
app.get("/redirect/", (req, res) => {
    res.render("redirect")
});
app.get("/loading/", (req, res) => {
    res.render("Loading")
});

app.listen(app.get("PORT"), caseEntorno);