// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { getNeko } from '../../internals/APIs.js';
import { randomFrom } from '../../internals/library.js';
import { SlashCommandBuilder } from '@discordjs/builders';
export const data = new SlashCommandBuilder()
    .setName('feet')
    .setDescription('Get feet from nekos.life!');
export async function execute(interaction) {
    const endpoints = ['feet', 'feetg', 'erofeet'];
    interaction.reply(
        interaction.channel.nsfw
            ? await getNeko(randomFrom(endpoints))
            : 'This command is only available in NSFW channels!',
    );
}
