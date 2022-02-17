// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import{getNeko}from'../../internals/APIs.js';
import{SlashCommandBuilder}from'@discordjs/builders';
export const data=new SlashCommandBuilder()
    .setName('hentai')
    .setDescription('Get hentai from nekos.life!');
export async function execute(interaction){
    interaction.reply(interaction.channel.nsfw?await getNeko('Random_hentai_gif'):'This command is only available in NSFW channels!');
};