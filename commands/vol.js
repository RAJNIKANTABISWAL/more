const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../Config.json");
module.exports.help = {
    name: "colume",
    decreption: "volume",
    aliases: ["vol"]
}

module.exports.run = async function(client, message, args) {
       let embed = new MessageEmbed().setColor(COLOR);

    const { channel } = message.member.voice;
    if (!channel) {
            embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL :/");
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Bot is not playing anything");
      return message.channel.send(embed);
    }

    if (!args[0]) {
      embed.setAuthor(`The Current Volume is ${serverQueue.volume}`);
      return message.channel.send(embed);
    }

    if (isNaN(args[0])) {
      embed.setAuthor("Please Use Numerical Values Only");
      return message.channel.send(embed);
    }

    if (args[0] > 150) {
      embed.setAuthor("You will die if you reach the limit of 150 :)");
      return message.channel.send(embed);
    }

    serverQueue.volume = args[0];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    embed.setDescription(`Changed the volume to **${args[0]}**`);
    embed.setThumbnail(client.user.displayAvatarURL());
    message.channel.send(embed);
  };
