
const Command = require("../../base/Command.js")
Discord = require("discord.js")

const Canvas = require("canvas");

class set join on extends Command {

    constructor (client) {
        super(client, {
            name: "set join on",
            dirname: __dirname,
            enabled: true,
            guildOnly: true,
            aliases: [ "set join on" ],
            memberPermissions: ["MANAGE_CHANNEL"],
            botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
            ownerOnly: false,
            cooldown: 3000
        });
    }
