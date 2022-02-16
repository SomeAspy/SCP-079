import { SlashCommandBuilder } from '@discordjs/builders';
export const data = new SlashCommandBuilder()
    .setName('unmute')
    .setDescription('Unmute a user.')
    .setDefaultPermission(true)
    .addUserOption(option => option.setName('target')
    .setDescription('The user to unmute')
    .setRequired(true))
    .addStringOption(option => option.setName('reason')
    .setDescription('The reason for the unmute')
    .setRequired(false));
export async function execute(interaction) {
    if (!interaction.memberPermissions.has('MODERATE_MEMBERS')) {
        interaction.reply('You do not have permission to use this command.\nMissing permission: `MODERATE_MEMBERS`');
    }
    else {
        const member = await interaction.guild.members.fetch(interaction.options.getUser('target').id);
        let reason = interaction.options.getString('reason');
        if (!reason) {
            reason = 'No reason provided.';
        }
        ;
        try {
            member.timeout(0, reason);
            interaction.reply(`${member.toString()} has been unmuted with reason ${reason}`);
        }
        catch (e) {
            console.log(e);
            interaction.reply('Could not unmute user.');
        }
        ;
    }
    ;
}
;
