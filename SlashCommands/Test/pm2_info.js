const Discord = require('discord.js');
const shell = require("child_process")

module.exports = {
    name: 'pm2_info',
    description: 'PM2 Information (esli nado pm2+ - dm me)',
    Globally: true,
    Permissions: [Discord.PermissionFlagsBits.Administrator],

        run: async (ankai, inter) => {
            try {
                const e = await shell.execSync('pm2 list').toString()
                inter.reply({ content:`${e}`, ephemeral: true })
            } catch (err) {
                inter.reply({ content: `An error occurred: ${err}`, ephemeral: true })
            }
        }
    }