const db = require ('quick.db')
module.exports = async (client, message) => {
  
    if (!message.guild || message.author.bot) return;
    if(db.has(`afk-${message.author.id}+${message.guild.id}`)) {
        const info = db.get(`afk-${message.author.id}+${message.guild.id}`)
        await db.delete(`afk-${message.author.id}+${message.guild.id}`)
        message.reply(`Your afk status have been removed (${info})`)
    }
  
    if(message.mentions.members.first()) {
        if(db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {
            message.channel.send(message.mentions.members.first().user.tag + ":" + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`))
        }else return;

    }else;
    client.prefix = '=';
    let args = message.content.slice(client.prefix.length).trim().split(" ");
     if (!message.content.startsWith(client.prefix)) return;
       let commandName = args.shift().toLowerCase();
    let command = client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName));
    if (!command) return;
        client.ecoAddUser = message.author.id;
      command.run(client, message, args)
 };
