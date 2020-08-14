[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/designed-in-ms-paint.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)](https://forthebadge.com)

# XenoBranch
A simple, easy and open source Twitch bot.

## Node Dependencies
Both NPM dependencies [better-ttb](https://www.npmjs.com/package/better-ttb) and [chalk](https://www.npmjs.com/package/chalk) are used in this repository.

[better-ttb](https://www.npmjs.com/package/better-ttb) is required for the main functionality to run this bot and [chalk](https://www.npmjs.com/package/chalk) is optional.

[better-ttb](https://www.npmjs.com/package/better-ttb) is a modified and version fixed up by [**@tascord**](https://github.com/tascord) that was originally, [twitch-bot](https://www.npmjs.com/package/twitch-bot).

## Installation
Download [NodeJS](https://nodejs.org/) and run `npm i` your terminal, ensuring you `cd` to your designated folder.

```jsonc
{
	"username": "botAccountName",
	"oauth": "twitchOathToken",
	"prefix': "-"
}
```

Open **config.json** and replace `twitchOathToken` with your oAuth token, you can generate one [here](https://twitchapps.com/tmi/).

In your **config.json** file also replace `botAccountName` to the name of your twitch account.

Finally, to run the bot in terminal, run `node index.js`.

## Default Commands

* **discord**, Promote your discord link, customise this command in `commandLinks.json`.
* **pack**, Send your resource pack link, customise this command in `commandLinks.json`.
* **twitter**, Promote your Twitter, customise this command in `commandLinks.json`.
* **youtube**, Promote your YouTube channel, customise this command in `commandLinks.json`.

## Creating Commands

To create a command create a new JavaScript file in `./commands/` with your `commandname`.js.

To declare the `commandLinks.js` file put the following at the top of our command.
```js
const commandsLinks = require('../commandLinks.json');
```
To link your new command back to your `index.js` file enter the following.
```js
exports.run = ((message) => {
    
    message.client.say(commandsLinks.poll);
    // Example of a new command.

})
```
Depending on your account, ensure you parse in the right variables to the file otherwise your command will error.
In your `./commandLinks.json` make a new field, the following is an example.
```jsonc
{
	"discord": "https://discord.gg/NeqVuSy",
	"twitter": "https://twitter.com/caykeMC",
	"youtube": "https://youtube.com/TheCactiveCake/",
	"pack": "http://bit.ly/indigobliss/",
	"poll": "This command doesn't exist yet!"
	// On the last field in a JSON, don't add a comma at the end. 
}
```
Unless you are using JSON with comments, remove the comments shown above.

From there, you are good to go and start customising this Twitch bot to your liking!

## Support & Bug Reporting

If you need any support setting up your custom bot, you may join the [CactiveNetwork discord](https://discord.gg/NeqVuSy) or create an issue on GitHub.
