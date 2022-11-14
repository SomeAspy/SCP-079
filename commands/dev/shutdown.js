
import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';
export const data = new SlashCommandBuilder()
    .setName('shutdown')
    .setDescription('shutdown the bot')
    .setDefaultPermission(false);
export async function execute(interaction, cli) {
    await interaction.reply({
        embeds: [
            new MessageEmbed()
                .setColor('#00FF00')
                .setDescription('Shutting Down...')
                .setTitle('Goodbye!'),
        ],
    });
    await cli.destroy();
}
