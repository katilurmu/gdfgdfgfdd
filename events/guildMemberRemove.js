module.exports = member => {
  let guild = member.guild;
  member.send('Üzüldüm ya. Gitmeseydin keşke.');
  guild.defaultChannel.sendMessage(`${member.user.username} gitti.`);
};
