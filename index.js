const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
const axios = require("axios");
const { prefix, token } = require("./config.json");

client.on("ready", () => {
  console.log("Bot online!");
});

client.on("message", async (message) => {
  serverInfo.init(message);
});

const serverInfo = {
  data: null,
  message: null,
  commands: function () {
    if (this.message.content.startsWith("!status")) {
      this.message.channel.send(`O servidor ${this.data.hostname} está, atualmente, com ${this.data.players.online} players online!`);
    }
  },

  init: function (message) {
    this.message = message;

    const data = axios({
      url: "https://api.mcsrvstat.us/1/mc.hypixel.net:25565",
      headers: { 'accept': "application/json" },
    })
      .then((result) => {
        this.data = result.data;
        this.commands();
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

client.login(token);
