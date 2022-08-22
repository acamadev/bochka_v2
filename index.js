const Discord = require('discord.js');
const fs = require('fs');

const ankai = new Discord.Client({
    intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildIntegrations, Discord.GatewayIntentBits.GuildMembers]
})

ankai.SlashCmds = new Discord.Collection()
ankai.events = new Discord.Collection()
ankai.config = require('./config.json')
module.exports.ankai = ankai

// Events
fs.readdirSync('./events/').forEach(file => {
    let files = fs.readdirSync('./events/').filter(file => file.endsWith('.js'))
    if(files.length <= 0) return 

    files.forEach(event => {
        const getEvent = require(`./events/${event}`)
        try {
            ankai.events.set(getEvent.name, getEvent);
        
        } catch(e) {
            return console.log(e)
        }
    })
})

// Slash Commands
fs.readdirSync('./SlashCommands/').forEach(dir => {
    fs.readdir(`./SlashCommands/${dir}`, (err, files) => {
        if(err) throw err;

        let sfiles = files.filter(f => f.endsWith('js'));
        if(sfiles.length <= 0) return;
        
        sfiles.forEach(file => {
            const getCommand = require(`./SlashCommands/${dir}/${file}`)
            try {
                ankai.SlashCmds.set(getCommand.name, getCommand);
            } catch(e) {
                return console.log(e)
            }
        })

    })
})


ankai.login(ankai.config.token)
