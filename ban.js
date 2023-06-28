const { EmbedBuilder } = require('discord.js');



module.exports = {
name: "ban",
description: "Bannir un membre.",
permission: "Aucune",
dm: true,
category: "Modération",

options: [
    {
        type: "user",
        name: "member",
        description: "L'utilisateur a ban.",
        required: true,
        autocomplete: true
    }
],

async run(bot, message, args) {
    const member = args.getUser('member')
    const noneban = new EmbedBuilder()
        .setDescription(`**${member.tag}** n'est pas bannissable.`)
        .setColor("00ff0c")
        const bane = new EmbedBuilder()
        .setDescription(`**${member.tag}** a bien était banni.`)
        .setColor("00ff0c")
    if (!member.ban) {
        return message.reply({ embeds : [noneban]});
    }
    return member
    .ZZban()
    .then(() => message.reply({ embeds : [bane]}))
    .catch(error => message.reply(`Oups... Il semblerait qu'il y ait une erreur.`))


}}
