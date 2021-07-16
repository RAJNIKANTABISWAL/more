  
const { tictactoe } = require('reconlx')

module.exports.help = {
    name: "ttt",
    decreption: "tic tac toe",
    aliases: ["tictactoe"]
}

module.exports.run = async function(client, message, args) {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Please specify a member')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
