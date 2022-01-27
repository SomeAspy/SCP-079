// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import{devMode,guildID}from'../settings.js';
export async function indexCommands(cli){
    let source:any;
    if(devMode){
        source=await cli.guilds.fetch(guildID).then((guild:{commands:any;}):any=>guild.commands.fetch());
    }else{
        source=await cli.application.commands.fetch();
    }
    console.log(source)
}