const commandsLinks = require('../commandLinks.json');

exports.run = ((message) => {
    
    message.client.say(commandsLinks.pack);

})