const Discord = require("discord.js")

module.exports.help = {
  name: '8ball',
  descreption: "8ball",
  aliases: ["8"]
}


module.exports.run = async function(client, message, args) {


    if(!args[0]) return message.channel.send(":x: You must enter an ask")
    if(args[0].length < 1) return message.channel.send(":x: You must enter an ask")


    let i = ["Yes","No","Maybe","Maybe not"]

    let y = i[Math.floor(i.length * Math.random())]


    message.channel.send(`:8ball: ${y}`)
}
