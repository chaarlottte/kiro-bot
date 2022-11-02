const { MessageFlags } = require("discord.js");
const ms = require("ms");
module.exports = {
    name: "break",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const member = message.member; 
            message.channel.send(`not that easy u spazz`)
    },
};
