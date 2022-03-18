import { getNeko } from '../../internals/APIs.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { randomFrom } from '../../internals/library.js';
export const data = new SlashCommandBuilder()
    .setName('kemonomimi')
    .setDescription('Get Kemonomimi from nekos.life!');
export async function execute(interaction: {
    reply: (arg0: string) => void;
    channel: { nsfw: any };
}): Promise<void> {
    const NSFWendpoints = ['lewdkemo', 'erokemo'];
    interaction.reply(
        await getNeko(
            randomFrom(interaction.channel.nsfw ? NSFWendpoints : 'kemonomimi'),
        ),
    );
}
