const Discord = require ('discord.js')

module.exports.help = {
    name: "avatar",
    decreption: "avatars",
    aliases: ["bot-avatar", "av", "avatar-bot"]
}

module.exports.run = async function(client, message, args) {
let useravatar;
                    let username;
                    if (message.mentions.users.size) {
                        useravatar = message.mentions.users.first();
                        username = message.mentions.users.first().username
                    } else {
                        useravatar = message.author;
                        username = message.member.displayName;
                    }
                    const avatar = useravatar.displayAvatarURL({dynamic: true, size:2048 });
                    const AvatarEmbed = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setTitle("Avatar of " + username)
                        .setImage(avatar)
                    return message.channel.send(AvatarEmbed);
}