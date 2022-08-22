const Discord = require('discord.js');
const randomanime = require('random-anime');

module.exports = {
    name: 'say',
    description: 'Отправить мсг в чатикс',
    Globally: true,
    Permissions: [Discord.PermissionFlagsBits.Administrator],
    options: [{
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
        const ch = inter.options.getChannel('channel');
        inter.deferReply();
        if(ch) {
        ankai.channels.cache.get(ch.id).send({ content: inter.options.getString('message') })
        inter.deleteReply()
} else {
        inter.channel.send({ content: inter.options.getString('message') })
        inter.deleteReply()
      }
    }

}