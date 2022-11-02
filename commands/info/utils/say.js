const { MessageFlags } = require("discord.js");
const ms = require("ms");
module.exports = {
    name: "say",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const member = message.member; 
        if (member.roles.cache.has('899499059608453230'));
            message.channel.send(`${args.join(" ")}`)
            message.channel.bulkDelete(1);
    },
};
