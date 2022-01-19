// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
"use strict";
import{REST}from'@discordjs/rest';
import{Routes}from'discord-api-types/v9';
import{commandData,devMode,clientID,guildID}from'./index.js';
import dotenv from'dotenv';
dotenv.config();
const restAPI=new REST({version:9}).setToken(process.env.DISCORD_TOKEN);
export async function pushCommands(){
	try{
		console.log(`Attempting to push ${commandData.length} commands to Discord API...`);
		if(devMode){
			console.log('Running in dev mode.\nPushing commands to guild...');
			await restAPI.put(Routes.applicationGuildCommands(clientID,guildID),
				{body:commandData}
			);
		}else{
			console.log('Running in production mode.\nPushing commands to bot...');
			await restAPI.put(Routes.applicationCommands(clientID),
				{body:commandData}
			);
		};
		console.log(`Successfully pushed ${commandData.length} commands to Discord API!`);
	}catch(e){
		console.log(e);
	};
};