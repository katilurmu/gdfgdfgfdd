const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(' ')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' arkadaşlarıyla Okey oynadı!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://img-s2.onedio.com/id-58b6f0a59da1fe9413a78eb3/rev-0/raw/s-9cb3a9455cf774ccb6d6f989dfd1db3bbeac8118.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'okeyoyna',
  description: 'Okey oynarsınız.',
  usage: 'okeyoyna'
};
