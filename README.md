[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/designed-in-ms-paint.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)](https://forthebadge.com)

# XenoBranch
A simple, easy and open source Twitch bot.

## Dependencies
Both [twitch-bot](https://www.npmjs.com/package/twitch-bot) and [chalk](https://www.npmjs.com/package/chalk) are used in this repository.

[twitch-bot](https://www.npmjs.com/package/twitch-bot) is required for the main functionality to run this bot and [chalk](https://www.npmjs.com/package/chalk) is optional.

## Installation
Download [NodeJS](https://nodejs.org/) and run `npm i` your terminal, ensuring you `cd` to your designated folder.

```json
{
	"username": "botAccountName",
	"oauth": "twitchOathToken"
}
```

Open **config.json** and replace `twitchOathToken` with your oAuth token, you can generate one [here](https://twitchapps.com/tmi/).

In your **config.json** file also replace `botAccountName` to the name of your twitch account.

Finally, to run the bot in terminal, run `node index.js`.

## Default Commands
Currently, there are no default commands setup. You can create one in the `index.js` file.
