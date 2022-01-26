import { nouns, verbs } from '../../internals/words.js';
import { randomFrom } from '../../internals/library.js';
import { SlashCommandBuilder } from '@discordjs/builders';
export const data = new SlashCommandBuilder()
    .setName('kill')
    .setDescription('Kill Someone!')
    .setDefaultPermission(true)
    .addUserOption(option => option.setName('target')
    .setDescription('The user to kill')
    .setRequired(false));
export async function execute(interaction) {
    let user;
    if (!interaction.options.getUser('target')) {
        user = 'a random passerby';
    }
    else {
        user = interaction.options.getUser('target');
    }
    ;
    let out = `${interaction.user.toString()} ${randomFrom(verbs)}s ${user.toString} with a ${randomFrom(nouns)}, killing them!`;
    interaction.reply(out);
}
;
