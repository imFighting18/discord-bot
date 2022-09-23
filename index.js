const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const { prefix, token } = require("./config.json");

client.on("ready", () => {
  console.log("Bot online!");
});

client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.id === "1022848661190889492") {
    const guildMember = reaction.message.guild.members.cache.get(user.id);
    if (!guildMember.roles.cache.get("1022849753509265478")) {
      guildMember.roles.add("1022849753509265478");
    } else {
      guildMember.roles.remove("1022849753509265478");
    }
  }
});

client.login(token);
