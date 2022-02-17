// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import{getNeko}from'../../internals/APIs.js';
import{SlashCommandBuilder}from'@discordjs/builders';
import{randomFrom}from'../../internals/library.js';
export const data=new SlashCommandBuilder()
    .setName('neko')
    .setDescription('Get nekos from nekos.life!');
export async function execute(interaction){
    const NSFWendpoints=[
        'lewd',
        'nsfw_neko_gif',
        'eron',
    ];
    const endpoints=[
        'neko',
        'ngif'
    ];
    interaction.reply(await getNeko(randomFrom(interaction.channel.nsfw?NSFWendpoints:endpoints)));
};