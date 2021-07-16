const { Message } = require('discord.js')

module.exports.help = {
    name: "unmute",
    decreption: "unmute",
    aliases: []
}

module.exports.run = async function(client, message, args) {
const { Message } = require('discord.js')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Member not found')

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)

        message.channel.send(`${Member.displayName} is now unmuted`)
    }