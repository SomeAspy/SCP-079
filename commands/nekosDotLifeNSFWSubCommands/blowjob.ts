// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { getNeko } from '../../internals/APIs.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { randomFrom } from '../../internals/library.js';
export const data = new SlashCommandBuilder()
    .setName('blowjob')
    .setDescription('Get blowjobs from nekos.life!');
export async function execute(interaction: {
    reply: (arg0: string) => void;
    channel: { nsfw: any };
}): Promise<void> {
    const endpoints = ['bj', 'blowjob'];
    interaction.reply(
        interaction.channel.nsfw
            ? await getNeko(randomFrom(endpoints))
            : 'This command is only available in NSFW channels!',
    );
}
