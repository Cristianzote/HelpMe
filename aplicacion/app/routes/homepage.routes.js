import { Router } from 'express';
const home = Router();
import firebaseAuth from '../../config/database/firebase.js';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import 'firebase/auth';

//GETS
home.get("/", (req, res) => {
    //res.send("path.dirname");
    res.render("Login");
});
home.get("/login", (req, res) => {
    res.render("Login");
});
home.get("/login2/", (req, res) => {
    res.render("LoginConFooter")
});
home.get("/registro/", (req, res) => {
    res.render("Registro")
});

//POSTS
home.post('/login', async (req, res) => {
  /*const { email, password } = req.body;
  firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {*/
      // Sign JWT token

      user = req.body.user;

      const uid = user.uid;
      const token = jwt.sign({ uid }, process.env.JWT_SECRET);
      const options = {
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        httpOnly: true,
      };
      res.cookie("paperros_user", token, options);
      res.redirect("/pyr");
    /*})
    .catch((error) => {
      console.log(error);
      res.redirect("/");
    });*/
});

export default home;