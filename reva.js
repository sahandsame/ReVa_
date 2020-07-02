const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

let dataJ = JSON.parse(fs.readFileSync("./dataJ.json", "utf8"));

