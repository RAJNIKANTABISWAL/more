const {MessageEmbed , Client , Message} = require('discord.js')
const figlet = require ('figlet')

module.exports.help = {
  name: 'ascii',
  descreption: "ascii",
  aliases: [""]
  }


module.exports.run = async function(client, message,args) {
  figlet.text(
    args.join(" "),
    {
    font: "Ghost",
},
async (err , data) => {
  message.channel.send(`\`\`\`${data}\`\`\``);
}
  )}