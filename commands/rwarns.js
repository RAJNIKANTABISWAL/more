const db = require("quick.db")

module.exports.help = {
    name: "rwarns",
    decreption: "reset warns",
    aliases: []
}
 module.exports.run = async function(client, message, args) {
    
    
  if (message.author.id !== '773031033850953748' &&
  !message.member.hasPermission('MANAGE_SERVER')){

    return message.channel.send('You do not have permissions to use this command')

  }
    
    const user = message.mentions.members.first()
    
    if(!user) {
    return message.channel.send("Please mention the person whose warning you want to reset")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Bot are not allowed to have warnings")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("You are not allowed to reset your warnings")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} do not have any warnings`)
    }
    
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`Your all warnings are reseted by ${message.author.username} from ${message.guild.name}`)
    await message.channel.send(`Reseted all warnings of ${message.mentions.users.first().username}`)
    
  
    
}
