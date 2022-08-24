const ankai = require("../index").ankai
const { InteractionType } = require('discord.js')
const Discord = require('discord.js')

ankai.on('interactionCreate', async inter => {

    if(inter.type === InteractionType.ApplicationCommand) {
        let slashCmds = ankai.SlashCmds.get(inter.commandName)

        if(!slashCmds.Permissions) slashCmds.Permissions = []
        if(!inter.member.permissions.has(slashCmds.Permissions)) {

        let p = new Discord.PermissionsBitField(slashCmds.Permissions).toArray().join(', ')

       return inter.reply({content: `сорямба, у тя нет прав. \n > ${p} `, ephemeral: true})
    }

        
        if(slashCmds) slashCmds.run(ankai, inter)
    }
})
