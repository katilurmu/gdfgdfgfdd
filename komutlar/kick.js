const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Hayır dostum!");
    if(args[0] == "yardım"){
      message.reply("Kullanım: mac!kick <üye> <sebep>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Atılacak kişiyi bulamıyorum!");
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Kişi atılamadı!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick VAKASI~")
    .setColor("#e56b00")
    .addField("Atılan üye", `${kUser} ID: ${kUser.id}`)
    .addField("Atan", `<@${message.author.id}> ID: ${message.author.id}`)
    .addField("Sebep", kReason);

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['at', 'tekmele'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğinizi atarsınız.',
  usage: 'kick'
};
