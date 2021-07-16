

module.exports.help = {
  name: 'kick',
  descreption: "kicks a member",
  aliases:[]
}

 const {MessageEmbed} = require('discord.js')
module.exports.run = async function(client, message,args) {
if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.channel.send(`You are unable to ban members`)
        }

    const memeber = message.mentions.members.first();;
    if(memeber) {
      const memberTarget = message.guild.members.cache.get(memeber.id);
      memberTarget.kick();
      const kick = new MessageEmbed()
      .setTitle('Kicked')
      .setDescription(`Kicked!\n${memeber.user.tag} From ${message.guild.name}`)
      .setColor('RANDOM')
      message.channel.send(kick)
    }else{
      message.channel.send("Mention A User/Bot To kick")
    }
}