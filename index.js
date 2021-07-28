const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();

fs.readdirSync('./events').forEach((file) => {
  let prop = require(`./events/${file}`);
  client.on(prop.event, prop.execute);
});
