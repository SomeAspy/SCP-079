// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { getNeko } from '../../internals/APIs.js';
import { SlashCommandBuilder } from '@discordjs/builders';
export const data = new SlashCommandBuilder()
    .setName('trap')
    .setDescription('Get traps from nekos.life!');
export async function execute(interaction: {
    reply: (arg0: string) => void;
    channel: { nsfw: any };
}): Promise<void> {
    interaction.reply(
        interaction.channel.nsfw
            ? await getNeko('trap')
            : 'This command is only available in NSFW channels!',
    );
}
