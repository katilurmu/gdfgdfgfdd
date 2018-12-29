const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if (!message.guild) {
    return message.author.send('`temizle` komutu sadece sunucularda kullanılır.');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('Tövbe tövbe. Kaç mesaj sileyim?')
  if (mesajsayisi > 100) return message.channel.send('Ayıp denen bir şey var. Bizde botuz! 100 üzeri mesaj silemem.');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send(mesajsayisi +' adet mesaj silindi.')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirttiğiniz sayı kadar mesaj siler.',
  usage: 'temizle <mesajsayisi>'
};
