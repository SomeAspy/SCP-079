// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { SlashCommandBuilder } from '@discordjs/builders';
export const data = new SlashCommandBuilder()
    .setName('unmute')
    .setDescription('Unmute a user.')
    .setDefaultPermission(true)
    .addUserOption((option) =>
        option
            .setName('target')
            .setDescription('The user to unmute')
            .setRequired(true),
    )
    .addStringOption((option) =>
        option
            .setName('reason')
            .setDescription('The reason for the unmute')
            .setRequired(false),
    );
export async function execute(interaction) {
    const out = {};
    if (!interaction.memberPermissions.has('MODERATE_MEMBERS')) {
        out.description =
            'You do not have permission to use this command.\nMissing permission: `MODERATE_MEMBERS`';
        out.color = '#FF0000';
    } else {
        const member = await interaction.guild.members.fetch(
            interaction.options.getUser('target').id,
        );
        let reason = interaction.options.getString('reason');
        if (!reason) {
            reason = 'No reason provided.';
        }
        try {
            await member.timeout(0, reason);
            out.description = `${member.toString()} has been unmuted with reason ${reason}`;
            out.color = '#00FF00';
        } catch (e) {
            out.description = `I could not unmute ${member.toString()}.`;
            if (e.message === 'Missing Permissions') {
                out.description = `I do not have permission to unmute ${member.toString()}.`;
            }
            out.color = '#FF0000';
        }
    }
    await interaction.reply({ embeds: [out] });
}
