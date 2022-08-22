const ankai = require('../index').ankai
const Discord = require('discord.js')

ankai.on('ready', async() => {

    console.log(`Logged in as ${ankai.user.tag}!`)
    
  let data = ankai.SlashCmds

  let filt1 = data.filter(c => c.Globally == true)
  console.log('(/) Start refreshing globally SlashCommands')         
  await ankai.application?.commands.set(filt1)
 console.log('(/) Success refreshing globally SlashCommands')
  let filt2 = data.filter(c => c.Globally == false)
   console.log('(/) Start refreshing local SlashCommands')          
  await ankai.guilds.cache.get(ankai.config.testGuildId).commands.set(filt2)
   console.log('(/) Success refreshing local SlashCommands')          
            
})

