import "dotenv/config";
import { createAudioPlayer, createAudioResource, joinVoiceChannel, NoSubscriberBehavior } from '@discordjs/voice';
import play from 'play-dl';
import { ActivityType, ChannelType, Client, GatewayIntentBits } from "discord.js";

const { URL, CHANNELID, TOKEN, STATUS } = process.env;

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildVoiceStates,
	]
});

if(!CHANNELID || !Number(CHANNELID)) {
	console.error("Invalid channel ID!");
}

if(!TOKEN) {
	console.error("Invalid token!");
}

if(!URL || !play.yt_validate(URL)) {
	console.error("Invalid URL!");
}

client.on("ready", async () => {
	client.user.setActivity(STATUS || "Radio CODE-FI", { type: ActivityType.Listening });
	const channel = await client.channels.fetch(CHANNELID);

	if(!channel || channel.type !== ChannelType.GuildVoice) {
		return console.error("Invalid channel!");
	}

	try {
		const connection = joinVoiceChannel({
			channelId: channel.id,
			guildId: channel.guild.id,
			adapterCreator: channel.guild.voiceAdapterCreator
		});

		const stream = await play.stream(URL);

		const resource = createAudioResource(stream.stream, {
            inputType: stream.type
        });

		const player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Play
            }
        });

		player.play(resource);
		connection.subscribe(player);
		
	} catch(err) {
		console.error(err);
	}


	console.log("CODE-FI Online!");
});

client.login(TOKEN);
