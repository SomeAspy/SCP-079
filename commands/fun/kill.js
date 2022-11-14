
import { nouns, verbs } from '../../internals/words.js';
import { randomFrom, randomHex } from '../../internals/library.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';
export const data = new SlashCommandBuilder()
    .setName('kill')
    .setDescription('Kill Someone!')
    .setDefaultPermission(true)
    .addUserOption((option) =>
        option
            .setName('target')
            .setDescription('The user to kill')
            .setRequired(false),
    );
export async function execute(interaction) {
    let user = String;
    if (!interaction.options.getUser('target')) {
        user = 'a random passerby';
    } else {
        user = interaction.options.getUser('target');
    }
    const out = new MessageEmbed()
        .setDescription(
            `${interaction.user.toString()} ${randomFrom(
                verbs,
            )}s ${user.toString()} with a ${randomFrom(nouns)}, killing them!`,
        )
        .setColor(randomHex());
    await interaction.reply({ embeds: [out] });
}
