import { indexCommands } from './indexCommands.js';
import { devMode, guildID, ownerID } from '../settings.js';
export async function applyPermissions(cli) {
    const commands = await indexCommands(cli);
    let perms;
    if (devMode) {
        perms = cli.guilds.cache.get(guildID)?.commands.permissions;
    }
    else {
        perms = cli.application?.commands.permissions;
    }
    ;
    await perms.set({
        fullPermissions: [{
                id: commands.get('test'),
                permissions: [{
                        id: ownerID,
                        type: 'USER',
                        permission: true
                    }],
            }, {
                id: commands.get('shutdown'),
                permissions: [{
                        id: ownerID,
                        type: 'USER',
                        permission: true
                    }],
            }
        ]
    });
}
;
