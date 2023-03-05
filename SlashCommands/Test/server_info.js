const Discord = require('discord.js');

module.exports = {
    name: 'server_info',
    description: 'Information about members, boosts, online members, and games played by members',
    Globally: true,
    Permissions: [Discord.PermissionFlagsBits.SendMessages],

    run: async (ankai, inter) => {
        const guild = inter.guild;

        const memberCount = guild.memberCount;
        const boostCount = guild.premiumSubscriptionCount || 0;
        const onlineMembers = guild.members.cache.filter(member => member.presence && member.presence.status === 'online').size;

    
        let games = new Set();
        Array.from(guild.members.cache).forEach(member => {
            if (member.presence.game) {
                games.add(member.presence.game.name);
            }
        });
        console.log(games)
    
        const embed =[{
              "title": "Server Info",
              "color": 3158326,
              "fields": [
                {
                  "name": "Members",
                  "value": memberCount,
                  "inline": true
                },
                {
                  "name": "Boosts",
                  "value": boostCount,
                  "inline": true
                },
                {
                  "name": "Online Members",
                  "value": onlineMembers,
                  "inline": true
                },
                {
                  "name": "Games",
                  "value": [...games].join(', ') || 'None'
                }
              ]
            }
          ]
    
        inter.reply({ embeds: embed, ephemeral: true });
      },
    };