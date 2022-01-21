// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
"use strict";
export const clientID="933045740052316160";//set this to your bots ID
export const ownerID="516750892372852754";//Set this to your own ID.
export const devMode=true;//Set this to true if you want to run the bot in dev mode.
export const guildID="774050236376285224";//Set this to the guild ID. This is only used if you want to run the bot in dev mode.
console.log(`Attempting to start bot...\nOwner ID: ${ownerID}\nAttempting to load dependencies...`);
import{Client,Intents}from'discord.js';
import dotenv from'dotenv';
import{readdirSync}from'fs';
import{pushCommands}from'./pushCommands.js';
console.log('Dependencies loaded.\nLooking for .env file...');
export const client=new Client({intents:[Intents.FLAGS.GUILDS]});
dotenv.config();
console.log('Found .env file.\nSearching for commands...');
export let commandData=[];
export let commands=new Map();
const commandFolders=readdirSync('./commands/');
for(const folder of commandFolders){
    const commandFiles=readdirSync(`./commands/${folder}`).filter((file)=>file.endsWith(".js"));
    for(const file of commandFiles){
        const command=await import(`./commands/${folder}/${file}`)
        commandData.push(command.data.toJSON());
        commands.set(command.data.name,command);
    };
};
await pushCommands();
console.log(`Found ${commandData.length} commands.\nWaiting on Discord API...`);
client.once('ready',()=>console.log(`Connected to Discord API!\nLogged in as ${client.user.tag}.\nMy ID: ${client.user.id}\nGuild Count: ${client.guilds.cache.size}`));
client.on('interactionCreate',(interaction)=>{
    if(!interaction.isCommand())return;
    try{
        commands.get(interaction.commandName).execute(interaction);
        console.log(`Executed command: ${interaction.commandName}`);
    }catch(e){
        console.log(e);
    };
});
await client.login(process.env.DISCORD_TOKEN);
