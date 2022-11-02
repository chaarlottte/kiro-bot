const { Client, Message, Util } = require('discord.js');

module.exports = {
    name: 'steal',
    /**
     * @param {client} client
     * @param {message} message
     * @param {string[]} args
     */
    run: async(client, message, args) => {
        if(!args.length) return message.reply('please specify emojis to steal')

        for(const rawEmoji of args) {
            const parsedEmoji = Util.parseEmoji(rawEmoji);

            if(parsedEmoji.id) {
                const extension = parsedEmoji.animated ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`;
                message.guild.emojis.create(url, parsedEmoji.name)
                    .then((emoji) => message.channel.send(`Added: \`${emoji.url}\``))
            }
        }
    },
};
