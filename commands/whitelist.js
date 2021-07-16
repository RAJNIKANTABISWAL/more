const Discord = require('discord.js')
const db = require('quick.db')
const config = require('../Config.json')

module.exports.help = {
    name: "whitelist",
    decreption: "whitelist",
    aliases: []
}

module.exports.run = async function(client, message, args) {
        if (message.author.id === config.owner) {
            let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase())
            
            let bReason = args.join(" ").slice(32)
            let noUser = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor("RANDOM")
                .setDescription('Please provide a valid user')
                .addField("Usage:", '`whitelist <user> [reason]`')
                .setFooter(message.client.user.username, message.client.user.avatarURL())

            if (!User) return message.channel.send(noUser)

            let checkingBlacklisted = db.fetch(`blacklisted_${User.id}`)

            if (!bReason) bReason = 'No reason defined'

            if(checkingBlacklisted === true){
                let alreadyBlacklisted = new Discord.MessageEmbed()
                .setDescription('This user isn\'t blacklisted!')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor("RANDOM")
                .setFooter(message.client.user.username, message.client.user.avatarURL())

            return message.channel.send(alreadyBlacklisted)
            }

            db.set(`blacklistMember_${User.id}`, false)
            let blacklistedEmbed = new Discord.MessageEmbed()
                .setDescription('I have whitelisted **' + User + '**')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor("RANDOM")
                .addField('Reason:', bReason)
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(blacklistedEmbed)
            
            
        } else {
            let cannotUse = new Discord.MessageEmbed()
                .setDescription('You cannot use this command. Only **OWNERS** can use this.')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor("RANDOM")
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(cannotUse)
        }
    }
    