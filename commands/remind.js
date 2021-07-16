  
const Discord = require("discord.js")
const ms = require("ms")
const db = require("quick.db")

module.exports.help = {
    name: "remind",
    decreption: "rmeind",
    aliases: ["rm"]
}

module.exports.run = async function(client, message, args) {
let timeuser = args[0]
let reason = args.slice(1).join(" ")

if(!timeuser) return message.reply(":x: You should enter time 10m 10s 10d")
if(!reason) return message.reply(":x: You should enter reason")

db.set(`remind.${message.author.id}`,Date.now() + ms(timeuser))
message.channel.send("ok")
const interval = setInterval(function() {


    if(Date.now() > db.fetch(`remind.${message.author.id}`)){
        db.delete(`remind.${message.author.id}`)
        message.author.send(`**Remind:**${reason}`)
        .catch(e => console.log(e))
        clearInterval(interval)
    }

},1000)
}

