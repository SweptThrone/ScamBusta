// libraries
const fs = require( "fs" )
const Discord = require( "discord.js" )

const client = new Discord.Client( {
	intents: Discord.IntentsBitField.Flags.MessageContent
			| Discord.IntentsBitField.Flags.GuildMessages
			| Discord.IntentsBitField.Flags.Guilds
} )

// config
const dataDir = "."
const token = fs.readFileSync( dataDir + "/.token", { encoding: "utf-8" } )
console.log( "Loaded token from " + dataDir + "/.token" )
const AUTOLOG_CHANNEL_ID = "1226351104355205180"
const DS_SERVER_ID = "869757940201046017"

client.on( "ready", function() {
    console.log( "ScamBusta online" )
} )

client.on( "error", function( err ) {
    console.error( err )
} )

function BustScams( msg ) {
	if ( !msg.guild ) {
		return
	}
	if ( msg.guild.id != DS_SERVER_ID ) {
		return
	}

	// all of these scam bots seem to like sending four images every time
	if ( msg.attachments.size == 4 && msg.member ) {
		msg.member.timeout( 60 * 60 * 1000, "Suspected scam images." )
		.then( function( mbr ) {
			msg.guild.channels.fetch( AUTOLOG_CHANNEL_ID )
			.then( function( autologChannel ) {
				let sendStr = `⚠️ <@${ mbr.user.id }> sent four images in one message.\nThe image URLs have been included to investigate, but they probably 404.`
				for ( let e of msg.attachments ) {
					sendStr += `\n<${ e[ 1 ].url }>`
				}
				autologChannel.send( sendStr )
				.then( function( _ ) {
					msg.delete().catch( console.error )
				} )
				.catch( console.error )
			} )
			.catch( console.error )
		} )
		.catch( console.error )
	}
}

client.on( "messageCreate", function( message ) {
	BustScams( message )
} )

client.on( "messageUpdate", function( old, message ) {
	BustScams( message )
} )

client.login( token )
