const Discord = require('discord.js')
const db = require('quick.db')

module.exports.help = {
    name: "snipe",
    decreption: "snipe",
    aliases: []
}

module.exports.run = async function(client, message, args) {
        let msg = await db.get(`msg_${message.channel.id}`)
        if (!msg) {
            return message.channel.send(`There Nothing to snipe`)
        }
        let author = await db.get(`author_${message.channel.id}`)
        let icon = message.guild.iconURL()
        let embed = new Discord.MessageEmbed()
            .setAuthor(message.client.users.cache.get(author).tag, message.client.users.cache.get(author).displayAvatarURL({ dynamic: true}))
            .setDescription(msg)
            .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
            .setColor("RANDOM")
        message.channel.send(embed)

    }
