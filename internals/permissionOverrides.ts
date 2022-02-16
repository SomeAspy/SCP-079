// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import{indexCommands}from'./indexCommands.js';
import{ApplicationCommandPermissionsManager, ApplicationCommandResolvable, Client, Guild}from'discord.js';
import{devMode,guildID,ownerID}from'../settings.js';
export async function applyPermissions(cli:Client):Promise<void>{
    const commands=await indexCommands(cli);
    let perms:ApplicationCommandPermissionsManager<{command?:ApplicationCommandResolvable;},{command:ApplicationCommandResolvable;},{},Guild,null>;
    if(devMode){
        perms=cli.guilds.cache.get(guildID)?.commands.permissions;
    }else{
        perms=cli.application?.commands.permissions;
    };
    await perms.set({
        fullPermissions:[{
            id:commands.get('test'),
            permissions:[{
                id:ownerID,
                type:'USER',
                permission:true
            }],
        },{
            id:commands.get('shutdown'),
            permissions:[{
                id:ownerID,
                type:'USER',
                permission:true
            }],
        }
    ]});
};