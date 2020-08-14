const TwitchBot = require('better-ttb')
const chalk = require('chalk');
const config = require('./config.json');
const commandsLinks = require('./commandLinks.json');
 
const client = new TwitchBot({
  username: config.username,
  oauth: config.oauth,
  // Change these channels to the ones that your bot is watching.
  channels: ['caykeXD']
});

// Client Events 
const requireEvent = event => require(`./events/${event}.js`);

client.on('join', requireEvent('join'));
client.on('message', requireEvent('message'));
client.on('error', requireEvent('error'));

// On Bot Start
client.on('connected', () => {
  console.log(chalk.magenta(`Connected to account ${client.username}.`));
  console.log(chalk.blue(`Watching channels, ${client.channels}.`));
});
