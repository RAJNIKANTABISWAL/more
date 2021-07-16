module.exports.help = {
    name: "spank",
    decreption: "spank",
    aliases: []
}

module.exports.run = async function(client, message, args) {
const { MessageEmbed } = require('discord.js');
const spank = new MessageEmbed()
  
  .setThumbnail(message.author.displayAvatarURL())
  .setTitle('SPANK') 
  .setImage('https://tenor.com/view/spank-tom-and-jerry-tom-puppy-gif-5196956')
  .setColor('RANDOM');
message.channel.send(spank)
}