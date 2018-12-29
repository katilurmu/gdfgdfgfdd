const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:spy: Kullanıcı komutları**")
    .setColor("#15f153")
    .addField("mac!yaz", "Bota yazı yazdırır")
    .addField("mac!botbilgi", "Bot hakkında bilgi verir")
    .addField("mac!sunucubilgi", "Sunucu hakkında bilgi verir")
    .addField("mac!token", "Bot tokenini verir")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Bütün kullanıcı komutlarını verir.',
  usage: 'kullanıcı'
};
