const Discord = require('discord.js');
const randomanime = require('random-anime');

module.exports = {
    name: 'say',
    description: 'Отправить мсг в чатикс',
    Globally: true,
    Permissions: [Discord.PermissionFlagsBits.Administrator],
    options: [
        {
            name: 'message',
            description: 'Какое сообщение отправить в этот чат?',
            type: Discord.ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'channel',
            description: 'чат?',
            type: Discord.ApplicationCommandOptionType.Channel,
            required: false
        }
    ],
    run: async (ankai, inter) => {
        inter.deferReply();
        const ch = inter.options.getChannel('channel');
        let target = ch ? ankai.channels.cache.get(ch.id) : inter.channel;
        target.send(`${inter.options.getString('message')}`);
    }
};