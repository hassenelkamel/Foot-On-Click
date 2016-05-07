var express = require('express');
var router = express.Router();
var request=require('request');

var mLab = require('mongolab-data-api')('uvxRwGeN6nKy9oQt5hg7yKYLltgGAbyN');



router.get('/inviter/:iduser',function(req, res, next){

    mLab.insertDocuments({
        database: 'footonclick',
        collectionName: 'invitation',
       documents: {date_invitation :Date.now(),userinvited: req.params.iduser}
    },function(req,res){
        console.log("ajout  Invitation avec succee ");


    });



});


router.get('/user',function(req, res, next){

   
var options = {
  database: 'footonclick',
  collectionName: 'user',
 };
 
mLab.listDocuments(options, function (err, data) {
 res.send(data);
     console.log("user avec succee ");
});



});






router.get('/:pos/:date/:partie/:stadium/:iduser',function(req, res, next){

    mLab.insertDocuments({
        database: 'footonclick',
        collectionName: 'reservation',
documents: {date_match:req.params.date,Partie:req.params.partie,position:req.params.pos,stadium:req.params.stadium,userreserv: req.params.iduser}
    },function(req,res){
        console.log("ajout reservation avec succee ");

    });



});







module.exports = router;