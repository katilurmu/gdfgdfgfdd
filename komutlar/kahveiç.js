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
    .setAuthor(message.author.username + ' kahve içti!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://writerchristinemarie.files.wordpress.com/2017/07/tumblr_olsh2snfzx1tk27deo1_500.gif?w=676`)
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
  name: 'kahveiç',
  description: 'Kahve içersiniz.',
  usage: 'kahveiç'
};
