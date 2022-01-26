import { SlashCommandBuilder } from '@discordjs/builders';
import { cli } from '../../index.js';
export const data = new SlashCommandBuilder()
    .setName('shutdown')
    .setDescription('shutdown the bot')
    .setDefaultPermission(false);
export async function execute(interaction) {
    cli.destroy();
}
;
