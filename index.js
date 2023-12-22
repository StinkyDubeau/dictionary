import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import fs from "node:fs";

const APP = express();
const PORT = 3000;
const API_URL = "https://dictionaryapi.com/api/v3/references/collegiate/json/";
const API_KEY = getKey();
var word = "dog"; // This word will be displayed on first load. May randomize in future.

APP.use(express.static("./public"));
APP.use(bodyParser.urlencoded({ extended: true }));

// Ths function will look for your API key in the /private directory.
// Your API key should be a .txt file containing one line only, your API key.
// To obtain an API key, visit https://dictionaryapi.com/
function getKey(){
    var key;
    try {
        const data = fs.readFileSync('private/apikey.txt', 'utf8');
        console.log(data);
        key = data;
      } catch (err) {
        console.log("Could not read key from file. Ensure your API key is valid and saved in ./private/apikey.txt")
        console.error(err);
      }
    return key;
}

APP.get("/", async(req, res) => {
    try{
        var url = API_URL + word + "?key=" + API_KEY;
        console.log(url);
        const response = await axios.get(url)
        res.render("index.ejs", {word: word, definitions: response.data});
    }catch{
        console.log("Something went wrong.");
    }
});

APP.post("/define", async (req, res) => {
    try{
        console.log(req.body.userWord);
        var url = API_URL + req.body.userWord + "?key=" + API_KEY;
        console.log(url);
        const response = await axios.get(url)
        res.render("index.ejs", {word: req.body.userWord, definitions: response.data});
    }catch{
        console.log("An error occurred. Code a1");
        res.redirect("/");
    }
});

APP.listen(PORT, () => {
    console.log("App running on port " + PORT);
});