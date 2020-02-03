const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("654414032769646602")
setInterval(function() {
channel.send(`كسمك يا ولاد القحبة محد يجي علي اخويا بيلر يا ولاد القحبة `);
}, 30)
})

client.login(process.env.BOT_TOKEN);