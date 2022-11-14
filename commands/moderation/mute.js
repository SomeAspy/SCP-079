
import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';
export const data = new SlashCommandBuilder()
    .setName('mute')
    .setDescription('Mute a user.')
    .setDefaultPermission(true)
    .addUserOption((option) =>
        option
            .setName('target')
            .setDescription('The user to mute')
            .setRequired(true),
    )
    .addIntegerOption((option) =>
        option
            .setName('time')
            .setDescription('The time to mute the user for in minutes')
            .setRequired(true),
    )
    .addStringOption((option) =>
        option
            .setName('reason')
            .setDescription('The reason for the mute')
            .setRequired(false),
    );
export async function execute(interaction) {
    const out = new MessageEmbed();
    if (!interaction.memberPermissions.has('MODERATE_MEMBERS')) {
        out.description =
            'You do not have permission to use this command.\nMissing permission: `MODERATE_MEMBERS`';
        out.color = '#FF0000';
    } else {
        const member = await interaction.guild.members.fetch(
            interaction.options.getUser('target').id,
        );
        let time = interaction.options.getInteger('time') * 60000;
        let reason = interaction.options.getString('reason');
        if (!reason) {
            reason = 'No reason provided.';
        }
        try {
            await member.timeout(time, reason);
            out.description = `${member.user.toString()} has been muted for ${interaction.options.getInteger(
                'time',
            )} minutes with reason ${reason}`;
            out.color = '#00FF00';
        } catch (e) {
            if (e.message === 'Missing Permissions') {
                out.description = `I do not have permission to mute ${member.toString()}.`;
                out.color = '#FF0000';
            }
        }
    }
    await interaction.reply({ embeds: [out] });
}
