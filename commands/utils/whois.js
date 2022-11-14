// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { getNeko } from '../../internals/APIs.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';
import { randomHex } from '../../internals/library.js';
export const data = new SlashCommandBuilder()
    .setName('animal')
    .setDescription('Get animal from nekos.life!')
    .addStringOption((option) =>
        option
            .setName('animal')
            .setDescription('The animal you want to get.')
            .setRequired(true)
            .addChoice('cat', 'meow')
            .addChoice('dog', 'woof')
            .addChoice('lizard', 'lizard')
            .addChoice('goose', 'goose'),
    );
export async function execute(interaction) {
    const embed = new MessageEmbed()
        .setImage(await getNeko(interaction.options.getString('animal')))
        .setTitle(`Here's your ${interaction.options.getString('animal')}!`)
        .setColor(randomHex());

    await interaction.reply({ embeds: [embed] });
}
