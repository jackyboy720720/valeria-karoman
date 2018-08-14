const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Valeria1') {
    	message.reply('Markus, võta mind siin ja praegu!');
  	}
});

client.on('message', message => {
    if (message.content === 'Valeria') {
    	message.reply('OMMMGGGG, Markus, kas sa vaatasid mu perset just väääää!!????!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
