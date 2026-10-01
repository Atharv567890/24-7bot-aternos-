const mineflayer = require('mineflayer');

const botOptions = {
  host: 'const mineflayer = require('mineflayer');

const botOptions = {
  host: 'const mineflayer = require('mineflayer');

const botOptions = {
  host: 'Chonosgoated.aternos.me', // <-- Change to your Aternos IP
  port: 25565,                    // <-- Change to your Aternos Port
  username: 'Player_AFK_Bot',     // <-- Use a generic human-sounding name
  version: '1.21.11'               // <-- Match your server version
};

let bot;

function startBot() {
  console.log('Connecting to server...');
  bot = mineflayer.createBot(botOptions);

  bot.on('spawn', () => {
    console.log('Bot spawned safely.');
    triggerRandomAction();
  });

  // Anti-AI Tracker Loop: Completely randomized behaviors and delays
  function triggerRandomAction() {
    if (!bot) return;

    const activities = ['jump', 'sneak', 'look', 'walk', 'swing'];
    const chosenActivity = activities[Math.floor(Math.random() * activities.length)];

    if (chosenActivity === 'jump') {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 400 + Math.random() * 300);
    } 
    else if (chosenActivity === 'sneak') {
      bot.setControlState('sneak', true);
      setTimeout(() => bot.setControlState('sneak', false), 800 + Math.random() * 1000);
    } 
    else if (chosenActivity === 'look') {
      // Looks in a fully randomized human vector circle
      const yaw = Math.random() * Math.PI * 2;
      const pitch = (Math.random() - 0.5) * (Math.PI / 3); 
      bot.look(yaw, pitch);
    } 
    else if (chosenActivity === 'walk') {
      // Steps slightly back and forth
      const directions = ['forward', 'back', 'left', 'right'];
      const dir = directions[Math.floor(Math.random() * directions.length)];
      bot.setControlState(dir, true);
      setTimeout(() => bot.setControlState(dir, false), 200 + Math.random() * 300);
    } 
    else if (chosenActivity === 'swing') {
      bot.swingArm('right');
    }

    // Crucial: Delays the NEXT action by a completely random time (between 8 to 22 seconds)
    // This breaks the uniform timeline that basic Aternos bot-detectors flag.
    const randomDelay = Math.floor(Math.random() * (22000 - 8000 + 1)) + 8000;
    setTimeout(triggerRandomAction, randomDelay);
  }

  bot.on('end', () => {
    console.log('Disconnected. Waiting 30s to reconnect...');
    setTimeout(startBot, 30000);
  });

  bot.on('error', (err) => console.error('Error:', err));
}

startBot();
', // <-- Change to your Aternos IP
  port: 25565,                    // <-- Change to your Aternos Port
  username: 'Player_AFK_Bot',     // <-- Use a generic human-sounding name
  version: '1.20.1'               // <-- Match your server version
};

let bot;

function startBot() {
  console.log('Connecting to server...');
  bot = mineflayer.createBot(botOptions);

  bot.on('spawn', () => {
    console.log('Bot spawned safely.');
    triggerRandomAction();
  });

  // Anti-AI Tracker Loop: Completely randomized behaviors and delays
  function triggerRandomAction() {
    if (!bot) return;

    const activities = ['jump', 'sneak', 'look', 'walk', 'swing'];
    const chosenActivity = activities[Math.floor(Math.random() * activities.length)];

    if (chosenActivity === 'jump') {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 400 + Math.random() * 300);
    } 
    else if (chosenActivity === 'sneak') {
      bot.setControlState('sneak', true);
      setTimeout(() => bot.setControlState('sneak', false), 800 + Math.random() * 1000);
    } 
    else if (chosenActivity === 'look') {
      // Looks in a fully randomized human vector circle
      const yaw = Math.random() * Math.PI * 2;
      const pitch = (Math.random() - 0.5) * (Math.PI / 3); 
      bot.look(yaw, pitch);
    } 
    else if (chosenActivity === 'walk') {
      // Steps slightly back and forth
      const directions = ['forward', 'back', 'left', 'right'];
      const dir = directions[Math.floor(Math.random() * directions.length)];
      bot.setControlState(dir, true);
      setTimeout(() => bot.setControlState(dir, false), 200 + Math.random() * 300);
    } 
    else if (chosenActivity === 'swing') {
      bot.swingArm('right');
    }

    // Crucial: Delays the NEXT action by a completely random time (between 8 to 22 seconds)
    // This breaks the uniform timeline that basic Aternos bot-detectors flag.
    const randomDelay = Math.floor(Math.random() * (22000 - 8000 + 1)) + 8000;
    setTimeout(triggerRandomAction, randomDelay);
  }

  bot.on('end', () => {
    console.log('Disconnected. Waiting 30s to reconnect...');
    setTimeout(startBot, 30000);
  });

  bot.on('error', (err) => console.error('Error:', err));
}

startBot();
', // <-- Change to your Aternos IP
  port: 25565,                    // <-- Change to your Aternos Port
  username: 'Player_AFK_Bot',     // <-- Use a generic human-sounding name
  version: '1.20.1'               // <-- Match your server version
};

let bot;

function startBot() {
  console.log('Connecting to server...');
  bot = mineflayer.createBot(botOptions);

  bot.on('spawn', () => {
    console.log('Bot spawned safely.');
    triggerRandomAction();
  });

  // Anti-AI Tracker Loop: Completely randomized behaviors and delays
  function triggerRandomAction() {
    if (!bot) return;

    const activities = ['jump', 'sneak', 'look', 'walk', 'swing'];
    const chosenActivity = activities[Math.floor(Math.random() * activities.length)];

    if (chosenActivity === 'jump') {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 400 + Math.random() * 300);
    } 
    else if (chosenActivity === 'sneak') {
      bot.setControlState('sneak', true);
      setTimeout(() => bot.setControlState('sneak', false), 800 + Math.random() * 1000);
    } 
    else if (chosenActivity === 'look') {
      // Looks in a fully randomized human vector circle
      const yaw = Math.random() * Math.PI * 2;
      const pitch = (Math.random() - 0.5) * (Math.PI / 3); 
      bot.look(yaw, pitch);
    } 
    else if (chosenActivity === 'walk') {
      // Steps slightly back and forth
      const directions = ['forward', 'back', 'left', 'right'];
      const dir = directions[Math.floor(Math.random() * directions.length)];
      bot.setControlState(dir, true);
      setTimeout(() => bot.setControlState(dir, false), 200 + Math.random() * 300);
    } 
    else if (chosenActivity === 'swing') {
      bot.swingArm('right');
    }

    // Crucial: Delays the NEXT action by a completely random time (between 8 to 22 seconds)
    // This breaks the uniform timeline that basic Aternos bot-detectors flag.
    const randomDelay = Math.floor(Math.random() * (22000 - 8000 + 1)) + 8000;
    setTimeout(triggerRandomAction, randomDelay);
  }

  bot.on('end', () => {
    console.log('Disconnected. Waiting 30s to reconnect...');
    setTimeout(startBot, 30000);
  });

  bot.on('error', (err) => console.error('Error:', err));
}

startBot();
