// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import{SlashCommandBuilder}from'@discordjs/builders';
export let data=new SlashCommandBuilder()
	.setName('mute')
	.setDescription('Mute a user.')
	.setDefaultPermission(true)
    .addUserOption(option=>
        option.setName('target')
            .setDescription('The user to mute')
            .setRequired(true)
    )
    .addIntegerOption(option=>
        option.setName('time')
            .setDescription('The time to mute the user for in minutes')
            .setRequired(true)
    )
    .addStringOption(option=>
        option.setName('reason')
            .setDescription('The reason for the mute')
            .setRequired(false)
    );
export async function execute(interaction:any):Promise<void>{
    const member=await interaction.guild.members.fetch(interaction.options.getUser('target').id);
    let time=interaction.options.getInteger('time')*1000;
    let reason=interaction.options.getString('reason');
    console.log(member.kickable);
    if(!reason){
        reason='No reason provided.';
    };
    try{
        member.timeout(time,reason);
    }catch(e){
        console.log(e);
        interaction.reply('Could not mute user.');
    };
};