
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
  .addField('πΈ Image Commands', '`meme`, `hug`, `slap`, `process` , `tickle`,`band` , `avatar` ,`maro` ')
  .addField("π οΈ Moderation Comman", "`kick`, `ban` , `unban` , `totalbans` , `slowmode` , `mute` , `unmute` , `tempmute` , `blacklist` , `whitelist`, `warn` , `rwarns` , `warns`")
  .addField(" π€Utlity Commands", " `ping`, `afk`, `purge` , `eval` , `corona` , `weather` , `math` , `addemoji` , `snipe` , `enlarge`, `delemoji` , `feedback` , `uptime` , `rnick` , `nick` , `say` , `rm`")
  .addField("π¨ Animals Commands", "`koala`, `panda` ,`fox` , `dog` , `bird`, `cat` ")
  .addField("π Information Commands", "`corona`, `botinfo`, `userinfo`, `invite` , `serverinfo` , `roleinfo`")
  .addField("π Fun Commands", "`emojify` , `ttt` , `hangman` , `ascii<anyword>` , `simprate` , `dumrate` , `howgay` ,`smartrate` , `urban` , `emoji` , `coinflip` , `8ball`")
  .addField("Music Commands π" , "`play` , `loop` , `stop` , `skip` , `np` , `shuffle` , `queue` , `volume` , `shuffle`")
  .setColor('RANDOM')
  .setThumbnail(
			message.author.displayAvatarURL({ format: 'png', dynamic: true })
		)
  .setFooter('made by twitch 0078 #9999');
message.channel.send(commands)
}
