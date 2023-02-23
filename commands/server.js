const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Informacion Del Server.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`El Nombre Del Server Es ${interaction.guild.name} Y Tiene ${interaction.guild.memberCount} Miembros.`);
	},
};