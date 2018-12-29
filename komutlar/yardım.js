const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:page_facing_up: Yardım Menüsü**")
    .setColor("#15f153")
    .addField("mac!eğlence", "Eğlence komutlarını gösterir")
    .addField("mac!kullanıcı:", "Kullanıcı komutlarını gösterir")
    .addField("mac!yetkili:", "Yetkili komutlarını gösterir")
    .addField("mac!sahip:", "Sahiplerin kullanabileceği komutları gösterir")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Bütün komutları verir.',
  usage: 'yardım'
};
