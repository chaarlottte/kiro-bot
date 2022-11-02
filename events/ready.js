const client = require("../index");

client.on("ready", () =>
    console.log(`${client.user.tag} is up and ready to go!`)
);
const arrayOfStatus = [
    `discord.gg/packparadise`,
    `youtube.com/rollmywoods`,
    `sub to akqme`
];

let index = 0;
setInterval(() => {
    if(index === arrayOfStatus.length) index = 0;
    const status = arrayOfStatus[index];
    client.user.setActivity(status);
    index++;
}, 10000)
