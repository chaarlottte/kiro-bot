const { MessageFlags } = require("discord.js");
const ms = require("ms");

module.exports ={
    name: 'purge',
    description: 'what do you think',
    userPermissions: ["MANAGE_MESSAGES"],
    options: [
        {
            name: 'amount',
            description: 'amount of messages purged',
            type: 'INTEGER',
            require: true,
        },
    ],

    run: async(client, interaction) => {
        const amount = interaction.options.getInteger('amount');

        if(amount > 100)
         return interaction.followUp({content:
             'The maximum amount of messages that can be purged at once is 100!'});

         const messages = await interaction.channel.messages.fetch({limit: amount+1})
    
        const filtered = messages.filter((msg) => Date.now() - msg.createdTimestamp < ms('14 days'));

        await interaction.channel.bulkDelete(filtered)

        interaction.channel.send({content: `Deleted ${filtered.size - 1} messages`})
    }
};