// Initialize Firebase with your configuration
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

// Get a reference to the authentication service
const auth = firebase.auth();

// Handle form submission
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  signIn(email, password);
});

// Handle sign-up button click
const signUpButton = document.getElementById('signup');
signUpButton.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  signUp(email, password);
});

// Sign in the user with email and password
function signIn(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      console.log(user);
      alert(email, password);
      window.location.href = "/pyr"
    })
    .catch((error) => {
      // Handle sign-in error
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorCode, errorMessage);
    });
}

// Sign up a new user with email and password
function signUp(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle sign-up error
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
}