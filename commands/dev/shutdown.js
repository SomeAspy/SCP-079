// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { SlashCommandBuilder } from '@discordjs/builders';
export const data = new SlashCommandBuilder()
    .setName('shutdown')
    .setDescription('shutdown the bot')
    .setDefaultPermission(false);
export async function execute(interaction) {
    interaction.reply('Shutting down...');
    await cli.destroy();
}
