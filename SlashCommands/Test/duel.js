const Discord = require('discord.js');
const randomanime = require('random-anime');

module.exports = {
    name: 'duel',
    description: 'кто раз на раз э петухи',
    Globally: true,
    Permissions: [Discord.PermissionFlagsBits.Administrator],
    options: [{
        name: 'user',
        description: 'user',
        type: Discord.ApplicationCommandOptionType.User,
        required: true
    },
    {
        name: 'комментарий',
        description: 'комментарий',
        type: Discord.ApplicationCommandOptionType.String,
        required: false
    }
],

    run: async (ankai, inter) => {
        const comment = inter.options.getString('комментарий');
        const target = inter.options.getUser('user');
       inter.reply({
      content: `${target}`, embeds: [
        {
          author: { name: `Дуэль???`, iconURL: inter.member.displayAvatarURL({dynamic: true}) },
          description: comment ? `**${target}** ну че будешь? Комментарий: ${comment}` : `**${target}** ну че будешь?`,
          thumbnail: { url: target.displayAvatarURL({ dynamic: true }) },
          color: "3158326"
        }
      ], components: [{
        type: 1,
        components: [
          {
            type: 2,
            label: "Патроллица",
            customId: "duel",
            style: 2,
          },
        ],
      }]
    })
    
        const msg = await inter.fetchReply()
    const collector = await msg.createMessageComponentCollector({ time: 180000 });
    collector.on("collect", (interplay) => {
      interplay.deferUpdate();
      if (interplay.member.id !== target.id) return
    const chance = Math.random()
    console.log(chance)
    
var fight = [
    `${target}`,
    `${inter.member}`
]
let fightresult = (fight[Math.floor(Math.random() * fight.length)])
if(fightresult === `${target}`){
   msg.edit({
         embeds: [
        {
          author: { name: `ИДЕТ ИДЕТ ИДЕТ...`, iconURL: inter.member.displayAvatarURL({dynamic: true}) },
          description: `₽?#(81192`,
          thumbnail: { url: target.displayAvatarURL({ dynamic: true }) },
          color: "3158326"
        }
      ],
          components: [],
        })
      setTimeout(() => {
        msg.edit({
         embeds: [
        {
          author: { name: `Haha`, iconURL: inter.member.displayAvatarURL({dynamic: true}) },
          description: `${inter.member} бля lmao.., ${target} красавчик`,
          thumbnail: { url: target.displayAvatarURL({ dynamic: true }) },
          color: "3158326"
        }
      ],
          components: [],
        })
      }, 6500)
      }
      if(fightresult === `${inter.member}`){
   msg.edit({
         embeds: [
        {
          author: { name: `ИДЕТ ИДЕТ ИДЕТ...`, iconURL: inter.member.displayAvatarURL({dynamic: true}) },
          description: `!₽?#(81192`,
          thumbnail: { url: target.displayAvatarURL({ dynamic: true }) },
          color: "3158326"
        }
      ],
          components: [],
        })
      setTimeout(() => {
        msg.edit({
         embeds: [
        {
          author: { name: `XDD`, iconURL: inter.member.displayAvatarURL({dynamic: true}) },
          description: `${target} бля lmao.., ${inter.member} красавчик`,
          thumbnail: { url: target.displayAvatarURL({ dynamic: true }) },
          color: "3158326"
        }
      ],
          components: [],
        })
      }, 6500)
      }
      })
     }
    
   }