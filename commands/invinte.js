const Discord = require('discord.js')
const client = new Discord.Client();
const disbut = require('discord-buttons')(client);
module.exports.help = {
	name: 'invite',
	decreption: 'invites',
	aliases: ['bot-invite', 'inv', 'invite-bot']
};
const { MessageEmbed } = require('discord.js');

module.exports.run = async function(client, message, args) {
	let invite = new MessageEmbed()
		.setDescription('Invite Blue Bot To Your Servers :D')
		.setThumbnail(
			message.author.displayAvatarURL({ format: 'png', dynamic: true })
		)
		.setTitle('BlueBot Invite Link')
		.setColor('5865F2');

	let invitebtn = new disbut.MessageButton()
		.setStyle('url')
		.setLabel('Invite BlueBot')
		.setID('invbb')
		.setURL(
			'https://discord.com/api/oauth2/authorize?client_id=843011711727960075&permissions=201334791&scope=bot');
	await message.channel.send({ button: invitebtn, embed: invite });
};
