// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import{SlashCommandBuilder}from'@discordjs/builders';
export const data=new SlashCommandBuilder()
	.setName('unmute')
	.setDescription('Unmute a user.')
	.setDefaultPermission(true)
    .addUserOption(option=>
        option.setName('target')
            .setDescription('The user to unmute')
            .setRequired(true)
    )
    .addStringOption(option=>
        option.setName('reason')
            .setDescription('The reason for the unmute')
            .setRequired(false)
    );
export async function execute(interaction:any):Promise<void>{
    const member=await interaction.guild.members.fetch(interaction.options.getUser('target').id);
    let reason=interaction.options.getString('reason');
    if(!reason){
        reason='No reason provided.';
    };
    try{
        member.timeout(0,reason);
        interaction.reply(`${member.toString()} has been unmuted with reason ${reason}`);
    }catch(e){
        console.log(e);
        interaction.reply('Could not unmute user.');
    };
};