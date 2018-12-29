const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:tools: Yetkili komutları**")
    .setColor("#15f153")
    .addField("mac!duyuru", "Duyuru yapar")
    .addField("mac!temizle", "Belirttiğiniz mesaj kadar sayı siler")
    .addField("mac!kick", "İstediğiniz bir kişiyi atarsınız")
    .addField("mac!ban", "İstediğiniz bir kişiyi yasaklarsınız")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetki'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Bütün yetkili komutlarını verir.',
  usage: 'yetkili'
};
