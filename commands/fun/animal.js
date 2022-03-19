// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { getNeko } from '../../internals/APIs.js';
import { SlashCommandBuilder } from '@discordjs/builders';
export const data = new SlashCommandBuilder()
    .setName('animal')
    .setDescription('Get animal from nekos.life!')
    .addStringOption((option) =>
        option
            .setName('animal')
            .setDescription('The animal you want to get.')
            .setRequired(false)
            .addChoice('cat', 'meow')
            .addChoice('dog', 'woof')
            .addChoice('lizard', 'lizard')
            .addChoice('goose', 'goose'),
    );
export async function execute(interaction) {
    interaction.reply(await getNeko(animal));
}
