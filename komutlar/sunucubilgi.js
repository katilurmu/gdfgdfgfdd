const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Sunucu ismi", message.guild.name)
    .addField("Kuruluş tarihi", message.guild.createdAt)
    .addField("Katıldığın tarih", message.member.joinedAt)
    .addField("Toplam üyeler", message.guild.memberCount)
    .addField("Sahip", message.guild.owner)

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sbilgi', 'sunucu'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};
