const Discord = require('discord.js');
const fs = require('fs');
const { glob } = require('glob')
const { promisify } = require("util");

const ankai = new Discord.Client({
    intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.GuildIntegrations, Discord.GatewayIntentBits.MessageContent, Discord.GatewayIntentBits.GuildMembers]
})

ankai.SlashCmds = new Discord.Collection()
ankai.events = new Discord.Collection()
ankai.commands = new Discord.Collection()
ankai.config = require('./config.json')
module.exports.ankai = ankai

const globPromise = promisify(glob);

// Events
async function events() {
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => {
    require(value)
    const file = require(value);
    const splitted = value.split("/");
    const filename = splitted[splitted.length - 1];
  })
}

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
async function cmd() {
// content commands
const commandFiles = await globPromise(`${process.cwd()}/commands/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
        	console.log(file.name)
            const properties = { directory, ...file };
            ankai.commands.set(file.name, properties);
        }
    });
   }
cmd()
events()


ankai.login(ankai.config.token)
