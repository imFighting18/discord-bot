const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, token } = require("./config.json");

client.on("ready", () => {
  console.log("Bot online!");
});

client.on("message", (message) => {
  if (message.author.bot) return;

  let mentions = message.mentions.users.map((item) => {
    if (message.content.startsWith(`${prefix}avise`)) var userID = item.id;
    userID = client.users.cache.get(userID);
    console.log(userID);
    var m = message.content.split("<");
    m = m[m.length - 1].replace(">", "");

    userID.send(
      `@${message.author.username} mencionou você com a mensagem: ${m}`
    );
  });
});

client.login(token);
