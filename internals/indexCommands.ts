// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import{Client}from'discord.js';
import{devMode,guildID}from'../settings.js';
export async function indexCommands(cli:Client):Promise<Map<string,string>>{
    let source:any;
    let commandIDs=new Map;
    if(devMode){
        source=await cli.guilds.fetch(guildID).then((guild)=>guild.commands.fetch()); //Apparently the guild isn't in the cache yet.
    }else{
        source=await cli.application.commands.fetch();
    }
    for(const command of source.values()){
        const name=command.name;
        const id=command.id;
        commandIDs.set(name,id);
    }
    return commandIDs;
};