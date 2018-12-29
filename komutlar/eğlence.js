const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:cookie: Eğlence komutları**")
    .setColor("#15f153")
    .addField("mac!ağla", "Botu ağlatır")
    .addField("mac!koş", "Koşarsınız")
    .addField("mac!pitbull", "Pitbulldan kaçarısınız")
    .addField("mac!token", "Bot tokenini verir")
    .addField("mac!çayiç", "Çay içersiniz")
    .addField("mac!çayaşekerat", "Çayınıza şeker atarsınız")
    .addField("mac!kahveiç", "Kahve içersiniz")
    .addField("mac!kafasalla", "Kafa sallarsınız")
    .addField("mac!okeyoyna", "Arkadaşlarınızla, doyasıya Okey oynarsınız")
    .addField("mac!pcaç", "Bilgisayarınızı açarsınız")
    .addField("mac!tekmeat", "Botu tekmelersiniz")
    .addField("mac!tokatat", "Bota tokat atarsınız")
    .addField("mac!yumrukat", "Bota yumruk atarsınız")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eglence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Bütün eğlence komutlarını verir.',
  usage: 'eğlence'
};
