
import { SlashCommandBuilder } from '@discordjs/builders';
export const data = new SlashCommandBuilder()
    .setName('test')
    .setDescription('A test command.')
    .setDefaultPermission(false);
export async function execute(interaction) {
    interaction.reply('Test command executed.');
}
