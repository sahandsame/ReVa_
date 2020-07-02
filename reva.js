const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

const init = async () => {
  
  
  let fileR = await readdir("./commands/");
  fileR.forEach(async (dir) => {
    let commands = await readdir("./commands/"+dir+"/");
    commands.filter((cmd) => cmd.split(".").pop() === "js").forEach((cmd) => {
      const response = client.loadCommand("./commands/"+dir, cmd);
      if(response){
        console.log(response, "error");
        }
      })
    });
  
  
  }
                                                                    
                                                                    


client.login();
