const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Bir şey belirt.');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setDescription(`**${mesaj}**`)
    .setColor("#15f153")
    .setAuthor(message.author.username, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
};

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazdır', 'konuş'],
    permLevel: 0
  };

  exports.help = {
    name: 'yaz',
    description: 'Bota istediğinizi yazdırır.',
    usage: 'yaz'
  };
