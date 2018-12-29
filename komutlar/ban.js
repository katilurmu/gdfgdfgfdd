const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Hayır dostum!");
    if(args[0] == "yardım"){
      message.reply("Kullanım: mac!ban <üye> <sebep>");
      return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Yasaklanacak kişi bulamıyorum!");
    let bReason = args.join(" ").slice(22);
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Kişi yasaklanamadı!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Yasaklama VAKASI~")
    .setColor("#bc0000")
    .addField("Yasaklanan kişi", `${bUser} ID: ${bUser.id}`)
    .addField("Yasaklayan kişi", `<@${message.author.id}> ID: ${message.author.id}`)
    .addField("Reason", bReason);

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yasakla', 'banla'],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'İstediğinizi yasaklarsınız.',
  usage: 'ban'
};
