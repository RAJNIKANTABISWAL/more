const db = require("quick.db")

module.exports.help = {
    name: "warns",
    decreption: "warns",
    aliases: []
}

module.exports.run = async function(client, message, args) {
    if (message.author.id !== '773031033850953748' &&
  !message.member.hasPermission('ADMINISTRATOR')){

    return message.channel.send('You do not have permissions to use this command')

  }
    const user = message.mentions.members.first() || message.author
    
  
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    
    if(warnings === null) warnings = 0;
    
    
    message.channel.send(`${user} have **${warnings}** warning(s)`)
  
  
  }