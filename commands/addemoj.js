const Discord = require('discord.js')
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports.help = {
  name: 'addemoji',
  descreption: "addemoji",
  aliases: ["steal"]
}


module.exports.run = async function(client, message, args) {
  if (message.author.id !== '773031033850953748' &&
  !message.member.hasPermission('MANAGE_EMOJIS')){

    return message.channel.send('You do not have permissions to use this command')

  }

  const emoji = args[0];
  if (!emoji) return message.channel.send(`Please Give Me A Emoji!`);

  let customemoji = Discord.Util.parseEmoji(emoji);

  if (customemoji.id) {
    const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
      customemoji.animated ? "gif" : "png"
      }`;
    const name = args.slice(1).join(" ");
    message.guild.emojis.create(
      `${Link}`,
      `${name || `${customemoji.name}`}`
    ).catch(error => {
      console.log(error)
    })
    const Added = new MessageEmbed()
      .setTitle(`Emoji Added`)
      .setColor(`${Color}`)
      .setDescription(
        `**Emoji Has Been Added!** | **Name:** \`${name || `${customemoji.name}`}\` | **Preview:** [Click Me](${Link})`
      );
    return message.channel.send(Added).catch(e => {
      console.log(e)
    })
  } else {
    let CheckEmoji = parse(emoji, {
      assetType: "png"
    });
    if (!CheckEmoji[0])
      return message.channel.send(`Please Give Me A Valid Emoji!`);
    message.channel.send(
      `You Can Use Normal Emoji Without Adding In Server!`
    );
  }
};