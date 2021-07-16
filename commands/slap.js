module.exports.help = {
    name: "slap",
    decreption: "slap",
    aliases: ["slap","slaps"]
}

module.exports.run = async function(client, message, args) {
const { MessageEmbed } = require('discord.js');
const slap = new MessageEmbed()
  .setDescription(`slap from ${message.member}`)
  .setThumbnail('https://cdn.discordapp.com/attachments/843034484739276820/847720788622704670/OIP_4.jpg')
  .setTitle('slapping') 
  .setImage('https://tenor.com/view/face-punch-punch-minions-fine-happy-gif-4902917')
  .setColor('RANDOM');
message.channel.send(slap)
}