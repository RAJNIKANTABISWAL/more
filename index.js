const Discord = require("discord.js");
const client = new Discord.Client({ disableMentions: 'everyone' });
const { MessageEmbed  , message} = require('discord.js');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.aliases = new Discord.Collection();

const db = require("@replit/database")
const Client = new db()
client.db = Client;
async function run() {
await Client.set("key", "value");
let key = await Client.get("key");
const Server = require("./server");
Server.start(4200);

const db = require ('quick.db')
client.queue = new Map()
client.vote = new Map() 


const fs = require("fs");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        const event = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir('./commands/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        let command = require(`./commands/${f}`);
        client.commands.set(command.help.name, command);
        command.help.aliases.forEach(aliases => {
            client.aliases.set(aliases, command.help.name);
        });
    });
});



client.login('ODQzMDExNzExNzI3OTYwMDc1.YJ9p1g.YYibrf6nlAnPpS2tBx0LEKcn8Jw')

}

run();