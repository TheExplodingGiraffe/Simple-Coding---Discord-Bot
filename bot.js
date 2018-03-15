//-----------------------------------------
// Simple codeing bot - *Copyright* Dead4Now
// Only to be used globally on the permission of Dead4Now#3348
//-----------------------------------------


const Discord = require('discord.js');
const client = new Discord.Client();

// Config (Token, prefix etc.)
const token = '' // The token of your bot,
prefix = '--' // Prefix of your bot.
clientid = '' // Not required.
clientname = '' // The name of your bot, used for reference later on.
// End of Config

// Custom message replies
pingreply = 'PONG! :)' // Reply for the ping command.
//coming soon
// End of custom message replies

// Custom command config
// - Custom Command 1 -
command2 = 'peanuts' // What you do to release the response (pie would make the command [prefix]pie )
command2text = 'I LIKE PIZZA YEA I DO' // What you want it to reply with - You can use mardown (``` - `` - ** - * - __ - ~~ etc.)
// - Custom Command 1 - END

//This is what happens when the bot is ready.
client.on('ready', () => {
  console.log(`Bot is connected as ${client.user.tag}.`);
  client.user.setStatus(`online`);
  client.user.setGame(`Online! - --[helpcommand]`) //You can also use ${client.guilds.size} for the ammount of guilds the bot is in. and ${client.users.size} to find out how many users the bot is working with.
})

//----------------------------------------------------------------
//Chat commands
//----------------------------------------------------------------


client.on('message', message => { // This is crucial, the bot won't work without this.

      if (message.content === prefix + 'ping') {
        if (message.channel.type === 'dm') return;
    const embed = new Discord.RichEmbed()
      .setColor("#FF0000")
      .setTitle("Pong!");
    let start = Date.now();
    message.channel.sendEmbed(embed, { disableEveryone: true })
      .then(m => {
        m.edit('', {
          embed: new Discord.RichEmbed()
            .setColor("#FF0000")
            .setDescription(`Pong!:ping_pong:\`${Date.now() - start}ms\``)
        })
      }).catch(console.error);
  }

    if (message.content === prefix + 'roll') {
      var result = Math.floor((Math.random() * 100) + 1);
      message.reply("You rolled a: " + result);
    };

    if (message.content === prefix + 'flip') {
      var result = Math.floor((Math.random() * 2) + 1);
      if (result == 1) {
        message.reply("The coin landed on heads");
      } else if (result == 2) {
        message.reply("The coin landed on tails");
      }
    };

    if (message.content === prefix + '8ball') {
      var sayings = ["It is certain",
                    "It is decidedly so",
                    "Without a doubt",
                    "Yes, definitely",
                    "You may rely on it",
                    "As I see it, yes",
                    "Most likely",
                    "Outlook good",
                    "Yes",
                    "Signs point to yes",
                    "Reply hazy try again",
                    "Ask again later",
                    "Better not tell you now",
                    "Cannot predict now",
                    "Concentrate and ask again",
                    "Don't count on it",
                    "My reply is no",
                    "My sources say no",
                    "Outlook not so good",
                    "Very doubtful"];

      var result = Math.floor((Math.random() * sayings.length) + 0);
      message.reply(sayings[result]);
    };

  if (message.content === (prefix + 'avatar')) {
    message.reply(message.author.avatarURL);
  }

  if (message.content === (prefix + 'prefix')) {
    message.channel.send('The prefix for this bot is ' + prefix);
  }

// This is an embed command \/
  if (message.content === (prefix + 'embed')) {
    message.channel.send("This is the message!", {
    embed: new Discord.RichEmbed()
    .setTitle("This is the title")
    .setDescription("This is the description")
    .setColor("#61FF00")
    .setFooter("This is the footer")
    });
  }

// Here you would make another command, I will leave examples etc. in a sperate file for you too view.
// Custom commands will be below this message.
// If you are choosing to reply to a command, and want new lines for example:
// I like
//
// Lots of cheese. You would use \n to make a new line. This can be found in the first custom command.

//custom command 1
  if (message.content === (prefix + 'lol')) {
    message.channel.send("I like\nCheese.")
  }


});


client.login(token);
