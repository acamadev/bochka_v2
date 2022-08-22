const Discord = require('discord.js');
const randomanime = require('random-anime');

module.exports = {
    name: 'hentai',
    description: 'Получить рандомную грязную фотачку..',
    Globally: true,
    Permissions: [Discord.PermissionFlagsBits.SendMessages],

    run: async (ankai, inter) => {
        if(!inter.channel.nsfw == true) return inter.reply('сибался в страхе и ужасе, вруби nsfw');
        const get_anime_photo = randomanime.nsfw()
        inter.reply({ content: `${get_anime_photo}`})
    
    }

}