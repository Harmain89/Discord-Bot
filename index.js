import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

// console.log(process.env.TOKEN);
// return true;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on('messageCreate', (message) => {
    // console.log(message);

    if(message.author.bot === false) {
        message.reply({
            content: 'Welcome To the Harmain\'s Server.'
        })
    }
})

client.on('interactionCreate', async interaction => {
    // console.log(interaction);

    interaction.reply({
        content: 'pong'
    })
})

client.login(process.env.TOKEN);