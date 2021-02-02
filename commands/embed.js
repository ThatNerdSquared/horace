module.exports.execute = async (client, message) => {
	message.channel.send('Welcome to Horace Embed Creator!');
};

module.exports.config = {
	name: 'embed',
	aliases: ['createEmbed'],
	description: 'Create an embed (admins only)',
	usage: ['embed <header> <body>'],
};