import { devMode, guildID } from '../settings.js';
export async function indexCommands(cli) {
    let source;
    if (devMode) {
        source = await cli.guilds.fetch(guildID).then((guild) => guild.commands.fetch());
    }
    else {
        source = await cli.application.commands.fetch();
    }
    console.log(source);
}
