//Funciones de Firebase: App y Firestore
import admin from 'firebase-admin';

import 'firebase/app';
import 'firebase/auth';
//import serviceAccount from "./creds.json";

// Configuración de Firebase con variables de entorno
/*const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  //credential: _credential.cert(serviceAccount)
};*/
const firebaseConfig = {
  apiKey: "AIzaSyBpCylpNe22Bh2irKLzrsA6xunSIjrlFFI",
  authDomain: "helpmealfa-41a62.firebaseapp.com",
  databaseURL: "https://helpmealfa-41a62-default-rtdb.firebaseio.com",
  projectId: "helpmealfa-41a62",
  storageBucket: "helpmealfa-41a62.appspot.com",
  messagingSenderId: "355917392425",
  appId: "1:355917392425:web:a675951b588aa001874a38"
};

// Iniciar servicios de Firebase
const initFirebase = admin.initializeApp(firebaseConfig);
//const auth = getAuth();

export const firebaseAuth = admin.auth();
export const firebaseFirestore = admin.firestore();


export default { firebaseAuth, firebaseFirestore }
//console.log(admin.auth());
//console.log(firebaseAuth.signInWithEmailAndPassword("cdramirez792@misena.edu.co", "12345678"));