const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription("yryyryryyryry"),
	async execute(interaction, client) {
		await interaction.reply(`Задерка бота:  ${client.ws.ping}`);
	},
};