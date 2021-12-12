
//var firebase = require('firebase')
const express = require('express')
var mysql = require('mysql');
const app = express(), 
bodyParser = require("body-parser");
const port = 3000;

//config de la connexion avec le frontend
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });
  app.use(bodyParser.json());
  


  //config du firebase
 /* var firebaseConfig = {
    apiKey: "AIzaSyAaLb6G5nbD2jsVbvqkaPnwWXEVizAF3tE",
    authDomain: "js-project-b7007.firebaseapp.com",
    databaseURL: "https://js-project-b7007-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "js-project-b7007",
    storageBucket: "js-project-b7007.appspot.com",
    messagingSenderId: "613227691457",
    appId: "1:613227691457:web:9473ee24d7330dd5700340"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 let database = firebase.database();*/

 //connexion avec la base de données
 var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'projectJS'
});
db.connect();

app.get('/hello', (req, res) => {
  //res.send('Hello World!')
  db.query("select * from users where firstName=?","nermine", function(err, result) {
    if (err) {
      res.json("erreur");
    } else {
      
      res.json(result[0]['firstName']);
    }
});
  
 // return "hello"
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
