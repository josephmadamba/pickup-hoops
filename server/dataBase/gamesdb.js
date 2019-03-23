
const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);


const db = require("../models");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const gamesdb = {
    // Reference functions I have down below
    createGames: createGames,
    getGames: getGames


}
module.exports = gamesdb



function createGames(date, day, time, title, description, userId){
    // THIS FUNCTION WILL RETURN A PROMISE
 return new Promise((resolve, reject)=>{
    //  BUILDING GAMES
     db.Game.build({
         date: date,
         day: day,
         time: time,
         title: title,
         description: description,
         user_id: userId
     })
     .save()
     .then(resoluts=>{
         resolve(resoluts)

     })
     .catch(er=>{
         reject(er)
     })
 })   
}

function getGames(){
    return new Promise((resolve, reject)=>{
        // FINDING GAMES AND ORDERING IT IN DESC ORDER SO WE GET THE NEWEST FIRST
        db.Game.findAll({
            order: [["id", "DESC"]]
        })
        .then(games=>{
  
            resolve(games)
        })
        .catch(er=>{
            console.log('This is er', er)
            reject(er)
        })
    })
}