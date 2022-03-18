// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { getNeko } from '../../internals/APIs.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { randomFrom } from '../../internals/library.js';
export const data = new SlashCommandBuilder()
    .setName('nekoAvatar')
    .setDescription('Get avatars from nekos.life!');
export async function execute(interaction) {
    interaction.reply(
        await getNeko(
            randomFrom(interaction.channel.nsfw ? 'nsfw_avatar' : 'avatar'),
        ),
    );
}
