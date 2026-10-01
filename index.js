const mineflayer = require('mineflayer');

const botOptions = {
  host: 'Chonosgoated.aternos.me', // <-- CHANGE THIS to your Aternos Server IP
  port: 25565,                    // <-- CHANGE THIS to your Aternos Port if custom
  username: 'Mincraft_AFK_Bot',     // <-- The name your bot will use in-game
  version: '1.20.1'               // <-- CHANGE THIS to match your server version
};

let bot;

function startBot() {
  console.log('Attempting to connect to the Minecraft server...');
  bot = mineflayer.createBot(botOptions);

  bot.on('spawn', () => {
    console.log('Success: Bot has successfully joined the Aternos server!');
    
    // Anti-AFK Loop: Runs actions every 15 seconds to trick Aternos' idle checker
    setInterval(() => {
      if (!bot) return;

      const actions = ['jump', 'sneak', 'look'];
      const currentAction = actions[Math.floor(Math.random() * actions.length)];

      if (currentAction === 'jump') {
        bot.setControlState('jump', true);
        setTimeout(() => bot.setControlState('jump', false), 500);
      } else if (currentAction === 'sneak') {
        bot.setControlState('sneak', true);
        setTimeout(() => bot.setControlState('sneak', false), 1000);
      } else if (currentAction === 'look') {
        const yaw = Math.random() * Math.PI * 2;
        const pitch = (Math.random() - 0.5) * Math.PI / 2;
        bot.look(yaw, pitch);
      }
      
      // Swing arm as an extra activity check
      bot.swingArm('right');
    }, 15000);
  });

  // Handle server disconnects or restarts seamlessly
  bot.on('end', () => {
    console.log('Disconnected from server. Reconnecting in 30 seconds...');
    setTimeout(startBot, 30000);
  });

  bot.on('error', (err) => console.error('Bot encountered an error:', err));
}

startBot();
