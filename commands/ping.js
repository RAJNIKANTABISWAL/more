
module.exports.help = {
    name: "ping",
    decreption: "Shows Bot Latency and Ping",
    aliases: ["pong"]
}
 const {MessageEmbed} = require('discord.js')
module.exports.run = async function(client, message, args) {
const gatewayLatency = client.ws.ping;
const trip = message.createdTimestamp;

message.channel.send('🏓Pinging...').then((m) => {
const embed = new MessageEmbed()
              .setTitle("Pong!")
            .addField("API Latency", `\`${gatewayLatency}ms\``, true)
            .addField("Client Latency", `\`${trip}ms\``, true)
            .setColor("FFD494")
            .setTimestamp();
        m.edit(embed);
})
}