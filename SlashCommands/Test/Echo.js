const Discord = require('discord.js')
const randomanime = require('random-anime')

module.exports = {
    name: 'anime',
    description: 'Получить рандомную аниме фотачку..',
    Globally: true,
    Permissions: [Discord.PermissionFlagsBits.SendMessages],

    run: async (ankai, inter) => {
        const get_anime_photo = randomanime.anime()
        inter.reply({ content: `${get_anime_photo}`})
    
    }

}