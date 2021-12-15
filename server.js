
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

 //connexion avec la base de données
 var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'projectJS'
});
db.connect();

app.get('/hello/:id', (req, res) => {
  //res.send('Hello World!')
  db.query("select * from users where firstName=?","nermine", function(err, result) {
    if (err) {
      res.json("erreur");
    } else {
      console.log(req.params.id)
      res.json(req.params.id);
    }
});
  // return "hello"
});

app.post('/signUp', (req, res) => {
  $user=req.body;
  /*$user.firstName="ner";
  $user.lastName="kh";
  $user.phone="555";
  $user.email="vdcv";
  $user.password="vcv";
  $user.address="gfd";*/
  //res.send('Hello World!')
  var $reqe="insert into users (firstName,lastName,adresse,phone,email,password) values ('"+$user.firstName+"','"+$user.lastName+"','"+$user.address+"','"+$user.phone+"','"+$user.email+"','"+$user.password+"')";
  db.query($reqe,function(err, result) {
    if (err) {
      res.json("erreur");
      console.log("error")
    } else {
      console.log("req.params.id")
      res.json("done");
    }
});

 // return "hello"
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
