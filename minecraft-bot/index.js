const mineflayer = require('mineflayer');

// Create bot instance
const bot = mineflayer.createBot({
  host: 'server_address', // Replace with your server IP or hostname
  port: 25565,            // Default Minecraft server port
  username: 'BotName',    // Replace with desired bot username
});

bot.on('spawn', () => {
  console.log('Bot has joined the server.');

  // Automatically left-click every 3 seconds
  setInterval(() => {
    bot.swingArm('left'); // Simulates a left click
    console.log('Bot left-clicked.');
  }, 3000);
});

bot.on('error', (err) => console.error(`Bot encountered an error: ${err}`));
bot.on('end', () => console.log('Bot has left the server.'));
