const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("Bot online!");
});

client.on("message", (message) => {
  if (message.content.startsWith("!oi")) {
    var msg = message.content.split(" ");
    message.reply(msg);
  }
});

client.login(config.token);
