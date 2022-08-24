const Discord = require('discord.js');
const shell = require("child_process")

module.exports = {
    name: 'bash',
    description: 'shell',
    aliases: ['shell'], 

    run: async (ankai, msg) => {
   const e = await shell.execSync(args.join(" ")).toString()
   message.reply({ content: `${e}` })
   }
  }