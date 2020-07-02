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
  const evtFiles = await readdir("./events/");
        evtFiles.forEach((file) => {
        const eventName = file.split(".")[0];
        console.log(`Loading Event: ${eventName}`);
        const event = new (require(`./events/${file}`))(client);
        client.on(eventName, (...args) => event.run(...args));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
  
  }
                                                                    
                                                                    


client.login();
