import { SlashCommandBuilder } from '@discordjs/builders';
export const data = new SlashCommandBuilder()
    .setName('shutdown')
    .setDescription('shutdown the bot')
    .setDefaultPermission(false);
export async function execute(interaction, cli) {
    interaction.reply('Shutting down...');
    await cli.destroy();
}
;
