const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603032090887454720")
setInterval(function() {
channel.send(`hhhhhhhh`);
}, 30)
})

client.login(process.env.BOT_TOKEN);