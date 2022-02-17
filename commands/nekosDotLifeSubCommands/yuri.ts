// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import{getNeko}from'../../internals/APIs.js';
import{SlashCommandBuilder}from'@discordjs/builders';
import{randomFrom}from'../../internals/library.js';
export const data=new SlashCommandBuilder()
    .setName('yuri')
    .setDescription('Get Yuri from nekos.life!');
export async function execute(interaction){
    const endpoints=[
        'eroyuri',
        'yuri'
    ];
    interaction.reply(interaction.channel.nsfw?await getNeko(randomFrom(endpoints)):'This command is only available in NSFW channels!');
};