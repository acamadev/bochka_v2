const Discord = require('discord.js');
module.exports = {
    name: 'eval',
    description: '?',
    Globally: true,
    Permissions: [Discord.PermissionFlagsBits.Administrator],
    options: [
    {
        name: 'inp',
        description: '?',
        type: Discord.ApplicationCommandOptionType.String,
        required: false
    }
],

    run: async (ankai, inter) => {
        const code = inter.options.getString('inp');
        const clean = text => {
            if (typeof (text) === 'string') { return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203)); } else { return text; }
        };
        try {
            // eslint-disable-next-line no-eval
            let evaled = await eval(code);

            if (typeof evaled !== 'string') {
                evaled = require('util').inspect(evaled, { depth: 0, sorted: true, maxArrayLength: 5 });
            }
            const t1 = process.hrtime();
            const t2 = process.hrtime(t1);
            const end = (t2[0] * 1000000000 + t2[1]) / 1000000;

            if (code.match(/\.token/gmi)) {
                return inter.reply('еще че хуесос'); // I'm not supporting that...
            } else {
                const result = clean(evaled);
                if (result.length > 2000) {
                    console.log('%s ms.\n%s', end, `inp: ${code}\n${clean(evaled)}`);
                    return inter.reply('result.length > 2000');
                } else {
                 inter.reply({ content: `1000000 ms.\n\`\`\`js\n${result}\`\`\``, ephemeral: true });
                }
            }
        } catch (err) {
            inter.reply({ content: `\`\`\`js\n// Error\n${err.name}: ${err.message}\`\`\``, ephemeral: true });
            console.log(`[eval] Error during eval: %s/n ${err}`);
        }
   }
  }