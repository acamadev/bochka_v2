const Discord = require('discord.js');
const shell = require("child_process")

module.exports = {
    name: 'bash',
    description: 'shell',
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
            try {
                const e = await shell.execSync(`${inter.options.getString('args')}`).toString()
                inter.reply({ content:`${e}`, ephemeral: true })
            } catch (err) {
                inter.reply({ content: `An error occurred: ${err}6`, ephemeral: true })
            }
        }
    }