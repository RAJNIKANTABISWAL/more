
module.exports.help = {
    name: "help",
    decreption: "help",
    aliases: ["help", "halp"]
}

module.exports.run = async function(client, message, args) {
const { MessageEmbed } = require('discord.js');
const commands = new MessageEmbed()
.setTitle("BlueBot's Commands!")
  .setDescription("Hey, im BlueBot! Im a multipurpose bot. My prefix is `=` please use it at the start of each commands..\n\n**Example**: `=<command>`\n\n")
  .addField('📸 Image Commands', '`meme`, `hug`, `slap`, `process` , `tickle`,`band` , `avatar` ,`maro` ')
  .addField("🛠️ Moderation Comman", "`kick`, `ban` , `unban` , `totalbans` , `slowmode` , `mute` , `unmute` , `tempmute` , `blacklist` , `whitelist`, `warn` , `rwarns` , `warns`")
  .addField(" 🤖Utlity Commands", " `ping`, `afk`, `purge` , `eval` , `corona` , `weather` , `math` , `addemoji` , `snipe` , `enlarge`, `delemoji` , `feedback` , `uptime` , `rnick` , `nick` , `say` , `rm`")
  .addField("🐨 Animals Commands", "`koala`, `panda` ,`fox` , `dog` , `bird`, `cat` ")
  .addField("📃 Information Commands", "`corona`, `botinfo`, `userinfo`, `invite` , `serverinfo` , `roleinfo`")
  .addField("😂 Fun Commands", "`emojify` , `ttt` , `hangman` , `ascii<anyword>` , `simprate` , `dumrate` , `howgay` ,`smartrate` , `urban` , `emoji` , `coinflip` , `8ball`")
  .addField("Music Commands 🔊" , "`play` , `loop` , `stop` , `skip` , `np` , `shuffle` , `queue` , `volume` , `shuffle`")
  .setColor('RANDOM')
  .setThumbnail(
			message.author.displayAvatarURL({ format: 'png', dynamic: true })
		)
  .setFooter('made by twitch 0078 #9999');
message.channel.send(commands)
}
