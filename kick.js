const { EmbedBuilder } = require('discord.js');



module.exports = {
name: "kick",
description: "Exclure un membre.",
permission: "Aucune",
dm: true,
category: "Modération",

options: [
    {
        type: "user",
        name: "member",
        description: "L'utilisateur a kick.",
        required: true,
        autocomplete: true
    }
],

async run(bot, message, args) {
    const member = args.getUser('member')
    const nonekick = new EmbedBuilder()
        .setDescription(`**${member.tag}** n'est pas expulsable.`)
        .setColor("00ff0c")
        const kicke = new EmbedBuilder()
        .setDescription(`**${member.tag}** a bien était expulsé.`)
        .setColor("00ff0c")
    if (!member.kickable) {
        return message.reply({ embeds : [nonekick]});
    }
    return member
    .kick()
    .then(() => message.reply({ embeds : [kicke]}))
    .catch(error => message.reply(`Oups... Il semblerait qu'il y ait une erreur.`))


}}
