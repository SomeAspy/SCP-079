// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import{getNeko}from'../../internals/APIs.js';
import{SlashCommandBuilder}from'@discordjs/builders';
export const data=new SlashCommandBuilder()
    .setName('classic')
    .setDescription('Get classics from nekos.life!');
export async function execute(interaction){
    interaction.reply(interaction.channel.nsfw?await getNeko('classic'):'This command is only available in NSFW channels!');
};