import { client } from '../../index';
// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import {nouns,verbs} from'../../words.js';
import{randomFrom}from'../../internals/lib.js';
import{SlashCommandBuilder}from'@discordjs/builders';
export let data=new SlashCommandBuilder()
	.setName('kill')
	.setDescription('Kill Someone!')
	.setDefaultPermission(true)
    .addUserOption(option=>
        option.setName('target')
            .setDescription('The user to kill')
            .setRequired(false)
    );
export async function execute(interaction){
	let user;
    if(!interaction.options.getUser('target')){
        user='a random passerby';
    }else{
        user=interaction.options.getUser('target');
    };
    let out=`<@${interaction.user.id}> ${randomFrom(verbs)}s <@${user.id}> with a ${randomFrom(nouns)}, killing them!`;
    interaction.reply(out)
};