const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'ботумный',
    description: 'он ответит на любой твой вопрос',
    Globally: true,
    Permissions: [Discord.PermissionFlagsBits.Administrator],
    options: [
        {
            name: 'args',
            description: '1',
            type: Discord.ApplicationCommandOptionType.String,
            required: true
        }],
        run: async (ankai, inter) => {
          const message2 = inter.options.getString('args');
          const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
apiKey: "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",
});
const openai = new OpenAIApi(configuration);
let msg = await inter.deferReply({
  content: `Подожди, я думаю....`,
});


const chapGPT = async (prompt) => {
const response = await openai.createChatCompletion({
model: "gpt-3.5-turbo",
messages: [{ role: "user", content: prompt }],
});


inter.followUp({
  content: `${response["data"]["choices"][0]["message"]["content"]}`,
})
};
let chatreply = await chapGPT(message2);
            }
        }
        