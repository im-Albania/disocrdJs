const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Your kakashka's login as: ${client.user.tag}`);
	},
};