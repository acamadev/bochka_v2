const ankai = require("../index.js").ankai
const { InteractionType } = require('discord.js')
const Discord = require('discord.js')

ankai.on('messageCreate', async message => {

    if (
        message.author.bot ||
       message.channel.type !== 0 ||
      !message.content.toLowerCase().startsWith('.')
    )
        return;
        console.log(ankai.config.prefix)
	console.log(ankai.commands)
    const [cmd, ...args] = message.content
        .slice(ankai.config.prefix.length)
        .trim()
        .split(/ +/g);

    const command = ankai.commands.get(cmd.toLowerCase()) || ankai.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(ankai, message, args);
});