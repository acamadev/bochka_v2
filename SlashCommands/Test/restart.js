const Discord = require('discord.js');
const shell = require("child_process")

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
        }],

        run: async (ankai, inter) => {
            const args = inter.options.getString('args');

            if (!args.length) return inter.send('?');
            
            const commandName = args[0];
            const command = inter.ankai.SlashCmds.get(commandName) || inter.ankai.SlashCmds.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
            
            if (!command) return inter.send('?');
            
            delete require.cache[require.resolve(`./${command.name}.js`)];
            
            try {
                const newCommand = require(`./${command.name}.js`);
                inter.ankai.SlashCmds.set(newCommand.name, newCommand);
                inter.send('+');
            } catch (error) {
                console.error(error);
                inter.send(`error: ${error}`);
            }
        }
}