const { MessageButton, MessageActionRow } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");


module.exports = {
   name: "larissa",

  run: async (client, message, args) => {

let embed = new MessageEmbed()
.setDescription(`Larissa

Olá me chamo Larissa, prazer em te conhecer!
Me adicione em seu servidor.`)
.setAuthor(`hhttps://imgur.com/FpWYa2Q`)
message.channel.send(({embeds: [embed]}))
 }
} 
