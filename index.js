const TwitchBot = require('twitch-bot')
const chalk = require('chalk');
const config = require('./config.json');
 
const client = new TwitchBot({
  username: config.username,
  oauth: config.oauth,
  channels: ['caykeXD', 'Blundxl']
})

client.on('connected', () => {
	console.log(chalk.magenta(`Connected to account ${client.username}.`))
	console.log(chalk.blue(`Watching channels, ${client.channels}.`))
})

client.on('join', channel => {
  console.log(chalk.green(`Joined channel: ${channel}`))
})
 
client.on('error', err => {
  console.log(chalk.red(err))
})
 
client.on('message', chatter => {
  if(chatter.message === '!discord') {
    client.say('https://discord.gg/NeqVuSy')
  }
})
