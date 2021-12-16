
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
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
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

app.post('/addProgram', (req, res) => {
  $program=req.body;
 console.log($program)
  var $reqe="insert into programs (owner,restauName,friends,programDate,restauAddress,description) values ('"+$program.owner+"','"+$program.restauName +"','"+$program.friendName+"','"+$program.dateR+"','"+$program.restauAddress+"','"+$program.description+"')";
  db.query($reqe,function(err, result) {
    if (err) {
      res.json("erreur");
      console.log("error")
    } else {
      console.log(req.params)
      res.json("done");
    }
});

 // return "hello"
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/userProgram/:owner', (req, res) => {
  //res.send('Hello World!')
  db.query("select * from programs where owner=?",req.params.owner, function(err, result) {
    if (err) {
      res.json("erreur");
    } else {
      //console.log(req.params.id)
      res.json(result);
    }
});
  // return "hello"
});

app.delete('/delete/:owner/:Pdate', (req, res) => {
  //res.send('Hello World!')
  console.log("here")
  var $req="delete from programs where owner='"+req.params.owner +"' and programDate='"+req.params.Pdate+"'";
  /*db.query($req, function(err, result) {
    if (err) {
      res.json("erreur");
    } else {
      console.log("done")
      //res.json(result);
    }
});*/
  // return "hello"
  res.json("doe");
});

app.get('/getInfoUser/:fName/:lName', (req, res) => {
  //res.send('Hello World!')
  var $ow="select * from users where firstName='"+req.params.fName+"' and lastName='"+req.params.lName+"'"
  db.query($ow, function(err, result) {
    if (err) {
      res.json("erreur");
    } else {
     // console.log(req.params.id)
      res.json(result);
    }
});
  // return "hello"
});

app.get('/getInfoUserByMail/:email/:pwd', (req, res) => {
  //res.send('Hello World!')
  var $ow="select * from users where email='"+req.params.email+"' and password='"+req.params.pwd+"'"
  db.query($ow, function(err, result) {
    if (err) {
      res.json("erreur");
    } else {
     console.log(result)
      res.json(result);
    }
});
  // return "hello"
});

app.get('/userInvitations/:friend', (req, res) => {
  //res.send('Hello World!')
  db.query("select * from programs where friends=?",req.params.friend, function(err, result) {
    if (err) {
      res.json("erreur");
    } else {
      //console.log(req.params.id)
      res.json(result);
    }
});
  // return "hello"
});