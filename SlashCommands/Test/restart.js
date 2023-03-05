const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
  name: 'restart',
  description: 'cmd',
  Globally: true,
  Permissions: [Discord.PermissionFlagsBits.Administrator],
  options: [
    {
      name: 'args',
      description: '1',
      type: Discord.ApplicationCommandOptionType.String,
      required: true
    }
  ],
  run: async (ankai, inter) => {
    const args = inter.options.getString('args');
    if (args === 'all') {
      const commandFiles = fs
        .readdirSync('./SlashCommands')
        .filter(file => file.endsWith('.js'));

      commandFiles.forEach(file => {
        delete require.cache[require.resolve(`./SlashCommands/${file}`)];
        const command = require(`./SlashCommands/${file}`);
        ankai.SlashCmds.set(command.name, command);
      });
      return inter.reply('vse');
    }

    const commandName = args;
    const command = ankai.SlashCmds.get(commandName) || ankai.SlashCmds.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return inter.reply('?');

    delete require.cache[require.resolve(`./${command.name}.js`)];

    try {
      const newCommand = require(`./${command.name}.js`);
      ankai.SlashCmds.set(newCommand.name, newCommand);
      inter.reply('+');
    } catch (error) {
      console.error(error);
      inter.reply(`error: ${error}`);
    }
  }
};
