# ScamBusta
Discord bot that mutes members who send four images in one message.

## Summary
This Discord bot monitors messages sent by all members.  
If a member sends a message with four images attached,  
that member is timed out, the message deleted,  
and an alert is sent to a configured channel.

## Requirements
- A machine with internet connection capable of running NodeJS.
- [NodeJS](https://nodejs.org/en) on said machine.
- A [Discord application with a bot user](https://discord.com/developers/applications).

## Specifications
The primary instance of ScamBusta runs on Discord.JS 14.26.4 on NodeJS 22.22.3.  
This is only what it was tested on; I'm sure it runs on newer versions as well.

## Installation and Running
1. Ensure NodeJS is installed properly.
   - Open a terminal and enter `node --version`.  It should spit a version number.  
2. Download this repository.  
3. Open a terminal in the same directory as `scambusta.js` and enter `npm i`.  
4. Create a new file named `.token` next to `scambusta.js`.  
   - Your directory should now have four files in it:  
     `scambusta.js`, `package.json`, `.token`, and `README.md`.
5. Obtain your bot's token from the ["Bot" tab of your application's page](https://discord.com/developers/applications).  
6. Paste the token you just copied into the `.token` file.  
7. Change the channel IDs on lines 15 and 16:
   - `AUTOLOG_CHANNEL_ID` is the ID of the channel the alerts will be sent to.  
     It should be staff-only.
   - `DS_SERVER_ID` is the ID of the server the bot will scan messages in.  
8. Assuming you have not closed your terminal from step 3, enter `node scambusta.js`.
> [!NOTE]  
> You will get an error about a non-existent file every time the bot is started  
> until it catches a scam.  This is normal, but if it ignores you, create a .txt  
> file named `caught.txt` next to `scambusta.js` and put `0` in it.

## Notes
This bot was made for one server I administrate,  
which is why it's written like this.  
This repository truly only exists to show the owner what's running  
or to give him the source code if he wants to run it himself.  
It's a private bot because I can't be bothered to set it up for public use.

## Motivation
These crypto casino scams are getting out of hand and AutoMod is ill-equipped  
to combat them.
