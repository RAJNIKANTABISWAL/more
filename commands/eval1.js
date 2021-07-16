const discord = require("discord.js");

function successEmbed(code) {
  const embed = new discord.MessageEmbed()
    .setTitle("🟢Eval Command🟢")
    .setDescription("Success!!")
    .addField("Input", code)
    .setColor("GREEN");
  return embed;
}

function errorEmbed(code, error) {
  const embed = new discord.MessageEmbed()
    .setTitle("🔴Eval Command🔴")
    .setDescription("Error!")
    .addFields([
      { name: "Input", value: code },
      { name: "Error", value: error },
    ])
    .setColor("RED");
  return embed;
}

function noAccessEmbed(message) {
  const embed = new discord.MessageEmbed()
    .setTitle("❌Eval Command❌")
    .setDescription("Access Denied")
    .addField("❔How to get access❔", "Ask the owner to whitelist you")
    .setFooter(`Reply to ${message.author.username}`)
    .setColor("ORANGE");
  return embed;
}

module.exports.help = {
  name: 'eval',
  description: 'A Eval Command To Directly Run A Script From In-App',
  aliases: []
}

 module.exports.run = async (client, message, args) => {
    var code = args.join(" ");
    const whitelistedUsers = ["713083932723249244", "773031033850953748"];
    if (!whitelistedUsers.includes(message.author.id)) {
      message.channel.send(noAccessEmbed(message));
    } else {
      try {
        const result = await eval(code);
        message.channel.send(successEmbed(code));
      } catch (error) {
        message.channel.send(errorEmbed(code, error.toString()));
      }
    }
  };