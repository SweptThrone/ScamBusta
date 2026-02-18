# ScamBusta
Discord bot that mutes members who send four images in one message.

## Summary
This Discord bot monitors messages sent by all members.  
If a member sends a message with four images attached,  
that member is timed out, the message deleted,  
and an alert is sent to a configured channel.

## Specifications  
This bot was built on Discord.JS for NodeJS.  

## Installation and Running
Create a bot user in your Discord Developer Portal.  
Download this repository somewhere, it is one file.  
Add your bot token to a file named `.token` right next to `scambusta.js`.  
Change the channel IDs on lines 15 and 16:
 - `AUTOLOG_CHANNEL_ID` is the channel the alert will be sent to.  
   It should be staff-only.
 - `DS_SERVER_ID` is the server the bot will scan messages in.  

Run the bot through Node.  

## Notes
This bot was made for one server I administrate,  
which is why it's written like this.  
This repository truly only exists to show the owner what's running  
or to give him the source code if he wants to run it himself.  
It's a private bot because I don't want it to spread too far.

## Motivation
These crypto casino scams are getting out of hand and AutoMod is ill-equipped  
to combat them.
