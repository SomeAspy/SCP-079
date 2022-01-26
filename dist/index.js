import { ownerID } from './settings.js';
console.log(`Attempting to start bot...\nOwner ID: ${ownerID}\nAttempting to load dependencies...`);
import { Client, Intents } from 'discord.js';
import dotenv from 'dotenv';
import { readdirSync } from 'fs';
import { pushCommands } from './internals/pushCommands.js';
console.log('Dependencies loaded.\nLooking for .env file...');
export const cli = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS] });
dotenv.config();
if (!process.env.DISCORD_TOKEN) {
    dotenv.config({ path: '../.env' });
}
;
console.log('Found .env file.\nSearching for commands...');
export let commandData = [];
export let commands = new Map();
const commandFolders = readdirSync('./commands');
for (const folder of commandFolders) {
    console.log(`Found command folder: ${folder}`);
    const commandFiles = readdirSync(`./commands/${folder}`).filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
        console.log(`Found command file: ${file}`);
        const command = await import(`./commands/${folder}/${file}`);
        commandData.push(command.data.toJSON());
        commands.set(command.data.name, command);
    }
    ;
}
;
await pushCommands();
console.log(`Found ${commandData.length} commands.\nWaiting on Discord API...`);
cli.once('ready', () => console.log(`Connected to Discord API!\nLogged in as ${cli.user.tag}.\nMy ID: ${cli.user.id}\nGuild Count: ${cli.guilds.cache.size}`));
cli.on('interactionCreate', (interaction) => {
    if (!interaction.isCommand())
        return;
    try {
        commands.get(interaction.commandName).execute(interaction);
        console.log(`Executed command: ${interaction.commandName}`);
    }
    catch (e) {
        console.log(e);
    }
    ;
});
cli.on('error', (e) => console.log(e));
cli.on('invalidated', () => {
    console.log('Session invalidated! Shutting down, Reboot will be required manually.');
    cli.destroy();
});
cli.on('invalidRequestWarning', (e) => console.log(e));
cli.on('rateLimit', (e) => console.log(e));
cli.on('shardDisconnect', (e) => console.log(e));
cli.on('shardError', (e) => console.log(e));
cli.on('warn', (e) => console.log(e));
await cli.login(process.env.DISCORD_TOKEN);
cli.user.setActivity('humanity', { type: 'WATCHING' });
