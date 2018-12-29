const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:chicken: Sahip komutları**")
    .setColor("#15f153")
    .addField("mac!eval", "Kod dener")
    .addField("mac!load", "Yeni bir komut yükler")
    .addField("mac!reboot", "Botu yeniden başlatır")
    .addField("mac!reload", "Bir komutu yeniden başlatır")
    .addField("mac!unload", "Bir komutu devre dışı bırakır")

    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sahipler'],
  permLevel: 0
};

exports.help = {
  name: 'sahip',
  description: 'Bütün sahip komutlarını verir.',
  usage: 'sahip'
};
