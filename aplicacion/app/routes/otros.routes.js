import { Router } from 'express';
const others = Router();
//const admin = require('firebase-admin');
import admin from 'firebase-admin';

    const firebaseConfig = {
        apiKey: "AIzaSyBpCylpNe22Bh2irKLzrsA6xunSIjrlFFI",
        authDomain: "helpmealfa-41a62.firebaseapp.com",
        databaseURL: "https://helpmealfa-41a62-default-rtdb.firebaseio.com",
        projectId: "helpmealfa-41a62",
        storageBucket: "helpmealfa-41a62.appspot.com",
        messagingSenderId: "355917392425",
        appId: "1:355917392425:web:a675951b588aa001874a38"
    };

    admin.initializeApp(firebaseConfig);

    const auth = admin
    admin.auth();

//Otros
others.post('/login', (req, res) => {
    
    //const { email, password } = req.body;
    //const emailUser = req.body.email;
    //const passwordUser = req.body.password;

    admin
    .auth()
    .signInWithEmailAndPassword(emailUser, passwordUser)
    .then((userCredential) => {
      /*  const user = userCredential.user;
        const token = jwt.sign({ userId: user.id }, 'your-secret-key'); // Generate a unique token
      */      
    // Store the token in the user's session or database record
        req.session.token = token;
        req.session.user = user;

    // Set the token as a cookie
    //res.cookie('token', token, { maxAge: 360000000, httpOnly: true }); // Set the token as a cookie, expires in 1 hour
  
    res.redirect('/PyR'); // Redirect to the dashboard or other protected views
    }).catch((error) => {
        // Handle authentication error
        res.redirect('/loginPage'); // Redirect to the login page with an error message
      });

  }
);

others.post('/logout', (req, res) => {
// Perform the necessary logout actions
// ...

// Clear the token and any other session-related data
// ...

res.get('/'); // Redirect to the login page or any other desired page
});

others.get("/redirect/", (req, res) => {
    res.render("redirect")
});
others.get("/loading/", (req, res) => {
    res.render("Loading")
});

export default others;