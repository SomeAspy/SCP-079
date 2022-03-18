
# SCP-079

A discord bot I'm writing in JavaScript with slash commands.

## Use it yourself:

1. Rename `example.env` to `.env`
2. Replace `PASTE YOUR TOKEN HERE` with your bot token
3. Set configurations in `settings.ts`:
    - `clientID` is the bot's user ID, hopefully this will be automated in the future.
    - `ownerID` is your user ID
    - `devMode` is a boolean (read more on what this does below)
        - `guildID` is only needed if `devMode=true`
4. run "`npm i`" in the bot folder
5. run "`npm run start`" in the bot folder to compile and start the bot

### What is `devMode`?

```devMode``` when set to true, will only send slash commands to the server specified in `guildID`, the reason you would want to do this is that when `devMode` is false, commands can take up to an hour to push to discord, and are also pushed to all guilds the bot is in.