import { Router } from 'express';
const home = Router();

//Logins
home.get("/", (req, res) => {
    //res.send("path.dirname");
    res.render("Login")
});
home.get("/loginPage/", (req, res) => {

    /*const { email, password } = req.body;
  
    const firebaseConfig = {
        apiKey: "AIzaSyBpCylpNe22Bh2irKLzrsA6xunSIjrlFFI",
        authDomain: "helpmealfa-41a62.firebaseapp.com",
        databaseURL: "https://helpmealfa-41a62-default-rtdb.firebaseio.com",
        projectId: "helpmealfa-41a62",
        storageBucket: "helpmealfa-41a62.appspot.com",
        messagingSenderId: "355917392425",
        appId: "1:355917392425:web:a675951b588aa001874a38"
    };
    firebase.initializeApp(firebaseConfig);
    
    const auth = firebase.auth();

        auth.signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // User signed in successfully
            const user = userCredential.user;
            console.log(user);
            alert(user);
            alert(email, password);
          })
          .catch((error) => {
            // Handle sign-in error
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert(errorCode, errorMessage);
          });

    req.session.user = {
      email: user.email,
      // Store any other relevant user information
    };*/
  
    res.render("Login");
    
});
home.get("/login2/", (req, res) => {
    res.render("LoginConFooter")
});
home.get("/registro/", (req, res) => {
    res.render("Registro")
});

export default home;